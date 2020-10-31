// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.7.3;


interface Mc {
    function balanceOf(address) external returns (uint256);

    function transferToMquad(address _from, uint256 _value) external returns (bool);

    function transfer(address _to, uint256 _value) external returns (bool);
}


library Math {
    /// @return uint256 = a + b
    function add(uint256 a, uint256 b) internal pure returns (uint256) {
        uint256 c = a + b;
        assert(c >= a);
        return c;
    }

    /// @return uint256 = a - b
    function sub(uint256 a, uint256 b) internal pure returns (uint256) {
        require(b <= a, "too big value");
        return a - b;
    }

    /// @return uint256 = a * b
    function mul(uint256 a, uint256 b) internal pure returns (uint256) {
        if (a == 0) {
            return 0;
        }
        uint256 c = a * b;
        assert(c / a == b);
        return c;
    }

    /// @return uint256 = a / b
    function div(uint256 a, uint256 b) internal pure returns (uint256) {
        return a / b;
    }

    /// @return the greatest uint256 less than or equal to the square root of a
    function sqrt(uint256 a) internal pure returns (uint256) {
        uint256 result = 0;
        uint256 bit = 1 << 254; // the second to top bit
        while (bit > a) {
            bit >>= 2;
        }
        while (bit != 0) {
            uint256 sum = result + bit;
            result >>= 1;
            if (a >= sum) {
                a -= sum;
                result += bit;
            }
            bit >>= 2;
        }
        return result;
    }
}


contract Mquad {
    using Math for uint256;

    address public mc;

    uint256 public totalAdministrators;
    mapping(address => bool) public administrators;
    address[] public pendingAdministrators;
    mapping(address => address[]) public votesForPendingAdministrators;

    mapping(address => bool) public funders;

    uint256 public stopSeconds = 0;
    uint256 public fundSum = 0;

    address[] public projectAddresses;
    mapping(address => Project) public projects;
    struct Project {
        uint256 sum;
        uint256 sqsum;
        bool approved;
        bytes link;
        address[] funders;
    }

    event Administrator(address indexed _administrator, bool _add);

    event VoteForAdministrator(address indexed _administrator, bool _add);

    event Funder(address indexed _funder, bool _add);

    event Start(uint256 _stopSeconds);

    event AddFunds(address _funder, uint256 _value);

    event AddProject(address indexed _project, address _creator, bytes _link);

    event Approved(address indexed _project, address _administrator);

    event Fund(address indexed _project, address _funder, uint256 value);

    event Finish(address _who);

    modifier onlyAdministrator {
        require(administrators[msg.sender], "not an administrator");
        _;
    }

    constructor(address _mc) {
        mc = _mc;
        totalAdministrators = 1;
        administrators[msg.sender] = true;
        emit Administrator(msg.sender, true);
    }

    function voteForAdministrator(address _administrator, bool _add) public onlyAdministrator {
        address sender = msg.sender;
        require(_add == !administrators[_administrator], "incorrect action");
        require(_add || totalAdministrators > 1, "single administrator");
        address[] storage votes = votesForPendingAdministrators[_administrator];
        uint256 votesN = votes.length;
        for (uint256 i = 0; i < votesN; i++) {
            require(votes[i] != sender, "already voted");
        }
        emit VoteForAdministrator(_administrator, _add);
        if (votesN >= totalAdministrators.div(2)) {
            if (_add) {
                totalAdministrators = totalAdministrators.add(1);
            } else {
                totalAdministrators = totalAdministrators.sub(1);
            }
            administrators[_administrator] = _add;
            emit Administrator(_administrator, _add);
            if (votesN > 0) {
                uint256 lastIndex = pendingAdministrators.length.sub(1);
                uint256 index = lastIndex;
                while (pendingAdministrators[index] != _administrator) {
                    index = index.sub(1);
                }
                if (index != lastIndex) {
                    pendingAdministrators[index] = pendingAdministrators[lastIndex];
                }
                pendingAdministrators.pop();
                delete votesForPendingAdministrators[_administrator];
            }
        } else {
            if (votesN == 0) {
                pendingAdministrators.push(_administrator);
            }
            votes.push(sender);
        }
    }

    function funder(address _funder, bool _add) public onlyAdministrator {
        bool previousState = funders[_funder];
        if (previousState != _add) {
            funders[_funder] = _add;
            emit Funder(_funder, _add);
        }
    }

    function start(uint256 _stopSeconds) public onlyAdministrator {
        require(stopSeconds == 0, "already started");
        require(_stopSeconds > block.timestamp, "too small value");
        stopSeconds = _stopSeconds;
        emit Start(stopSeconds);
    }

    function addFunds(uint256 _value) public {
        require(block.timestamp < stopSeconds || stopSeconds == 0, "finished");
        require(Mc(mc).transferToMquad(msg.sender, _value), "not enough funds");
        fundSum = fundSum.add(_value);
        emit AddFunds(msg.sender, _value);
    }

    function addProject(address _project, bytes calldata _link) public {
        require(block.timestamp < stopSeconds, "finished");
        require(_link.length > 0, "zero link");
        Project storage project = projects[_project];
        require(project.link.length == 0, "already added");
        project.link = _link;
        projectAddresses.push(_project);
        emit AddProject(_project, msg.sender, _link);
    }

    function approve(address _project) public onlyAdministrator {
        require(block.timestamp < stopSeconds, "finished");
        Project storage project = projects[_project];
        require(project.link.length > 0, "not exist");
        require(!project.approved, "already approved");
        project.approved = true;
        emit Approved(_project, msg.sender);
    }

    function fundProject(address _project, uint256 _value) public {
        address sender = msg.sender;
        require(block.timestamp < stopSeconds, "finished");
        require(funders[msg.sender], "not a funder");
        Project storage project = projects[_project];
        require(project.approved, "not approved");
        bool funded = false;
        uint256 fundersN = project.funders.length;
        for (uint256 i = 0; i < fundersN; i++) {
            if (project.funders[i] == sender) {
                funded = true;
                break;
            }
        }
        require(!funded, "already funded");
        require(Mc(mc).transferToMquad(sender, _value), "not enough funds");
        project.sum = project.sum.add(_value);
        project.sqsum = project.sqsum.add(_value.sqrt());
        project.funders.push(sender);
        emit Fund(_project, sender, _value);
    }

    function finish() public onlyAdministrator {
        require(stopSeconds > 0, "not started");
        uint256 projectsN = projectAddresses.length;
        uint256 qsum = 0;
        for (uint256 i = 0; i < projectsN; i++) {
            Project storage project = projects[projectAddresses[i]];
            if (project.approved) {
                qsum = qsum.add(project.sqsum.mul(project.sqsum));
            }
        }
        for (uint256 i = 0; i < projectsN; i++) {
            address projectAddress = projectAddresses[i];
            Project storage project = projects[projectAddress];
            if (project.approved && qsum > 0) {
                uint256 value = project.sum;
                value = value.add((project.sqsum.mul(project.sqsum)).mul(fundSum).div(qsum));
                Mc(mc).transfer(projectAddress, value);
            }
            delete projects[projectAddress];
        }
        delete projectAddresses;
        stopSeconds = 0;
        fundSum = Mc(mc).balanceOf(address(this));
        emit Finish(msg.sender);
    }

    function totalPendingAdministrators() public view returns (uint256) {
        return pendingAdministrators.length;
    }

    function totalVotesForAdministrator(address _administrator) public view returns (uint256) {
        return votesForPendingAdministrators[_administrator].length;
    }

    function haveVotedForAdministrator(address _administrator) public view returns (bool) {
        address sender = msg.sender;
        address[] storage votes = votesForPendingAdministrators[_administrator];
        uint256 votesN = votes.length;
        for (uint256 i = 0; i < votesN; i++) {
            if (votes[i] == sender) {
                return true;
            }
        }
        return false;
    }

    function totalProjects() public view returns (uint256) {
        return projectAddresses.length;
    }

    function projectTotalFunders(address _project) public view returns (uint256) {
        return projects[_project].funders.length;
    }

    function projectFunder(address _project, uint256 i) public view returns (address) {
        return projects[_project].funders[i];
    }

    function haveFundProject(address _project) public view returns (bool) {
        address sender = msg.sender;
        Project storage project = projects[_project];
        uint256 fundersN = project.funders.length;
        for (uint256 i = 0; i < fundersN; i++) {
            if (project.funders[i] == sender) {
                return true;
            }
        }
        return false;
    }
}