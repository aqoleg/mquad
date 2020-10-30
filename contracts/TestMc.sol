// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.7.3;


library TestMath {
    function add(uint256 a, uint256 b) internal pure returns (uint256) {
        uint256 c = a + b;
        assert(c >= a);
        return c;
    }

    function sub(uint256 a, uint256 b) internal pure returns (uint256) {
        require(b <= a, "too big value");
        return a - b;
    }
}


contract TestMc {
    using TestMath for uint256;

    address public mquad = address(0);
    uint256 public totalSupply;
    mapping(address => uint256) public balanceOf;
    uint8 public constant decimals = 18;
    string public name = "M+Climate test token";
    string public symbol = "M+C";

    event Transfer(address indexed _from, address indexed _to, uint256 _value);
    event Approval(address indexed _holder, address indexed _spender, uint256 _value);

    constructor() {
        totalSupply = 10**24;
        balanceOf[msg.sender] = totalSupply;
        emit Transfer(address(0), msg.sender, totalSupply);
    }

    function setMquad(address _mquad) public {
        require(mquad == address(0), "already set");
        mquad = _mquad;
    }

    function transferToMquad(address _from, uint256 _value) public returns (bool) {
        require(msg.sender == mquad, "not mquad");
        return _transfer(_from, mquad, _value);
    }

    function transfer(address _to, uint256 _value) public returns (bool) {
        return _transfer(msg.sender, _to, _value);
    }

    function _transfer(address _from, address _to, uint256 _value) private returns (bool) {
        require(_to != address(0), "zero reciepient");
        balanceOf[_from] = balanceOf[_from].sub(_value);
        balanceOf[_to] = balanceOf[_to].add(_value);
        emit Transfer(_from, _to, _value);
        return true;
    }
}
