"use strict";

(function () {
    var mcAddress = '0x935bd9Ba37D597BF88f750BA64B162D03f9b1650';
    var mquadAddress = '0x04151a909061d37dAA770b9dd65Db1c9Bb830249';
    var mcAbi = [
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "balanceOf",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "totalSupply",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "transfer",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ];
    var mquadAbi = [
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "addFunds",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_project",
                    "type": "address"
                },
                {
                    "internalType": "bytes",
                    "name": "_link",
                    "type": "bytes"
                }
            ],
            "name": "addProject",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "administrators",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_project",
                    "type": "address"
                }
            ],
            "name": "approve",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "finish",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_project",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "fundProject",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "fundSum",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_funder",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "_add",
                    "type": "bool"
                }
            ],
            "name": "funder",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "funders",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_administrator",
                    "type": "address"
                }
            ],
            "name": "haveVotedForAdministrator",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "pendingAdministrators",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "projectAddresses",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_project",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "i",
                    "type": "uint256"
                }
            ],
            "name": "projectFunder",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_project",
                    "type": "address"
                }
            ],
            "name": "projectTotalFunders",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "projects",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "sum",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "sqsum",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "approved",
                    "type": "bool"
                },
                {
                    "internalType": "bytes",
                    "name": "link",
                    "type": "bytes"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_stopSeconds",
                    "type": "uint256"
                }
            ],
            "name": "start",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "stopSeconds",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "totalAdministrators",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "totalPendingAdministrators",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "totalProjects",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_administrator",
                    "type": "address"
                }
            ],
            "name": "totalVotesForAdministrator",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_administrator",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "_add",
                    "type": "bool"
                }
            ],
            "name": "voteForAdministrator",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "votesForPendingAdministrators",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_project",
                    "type": "address"
                }
            ],
            "name": "haveFundProject",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ];

    var mcContract = null; // null if network is not kovan
    var mquadContract = null;
    var account = null; // checksummed address or null
    var blocked = false; // true if current operation is unfinished
    var loader = 0;

    window.onload = function () {
        document.getElementById('connect').onclick = connect;
        document.getElementById('addAdministrator').onclick = function () {
            administrator(true);
        };
        document.getElementById('removeAdministrator').onclick = function () {
            administrator(false);
        };
        document.getElementById('addFunder').onclick = function () {
            funder(true);
        };
        document.getElementById('removeFunder').onclick = function () {
            funder(false);
        };
        document.getElementById('start').onclick = start;
        document.getElementById('approve').onclick = approve;
        document.getElementById('finish').onclick = finish;
        document.getElementById('pool').onclick = pool;
        document.getElementById('addProject').onclick = addProject;
        document.getElementById('vote').onclick = vote;

        var script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js';
        script.onload = function () {
            if (typeof window.ethereum === 'undefined') {
                document.getElementById('startMessage').innerHTML = 'install ' +
                    '<a href="https://metamask.io/download.html" target="_blank" rel="noopener">' +
                    'metamask</a> or use ' +
                    '<a href="https://opera.com" target="_blank" rel="noopener">opera</a>';
            } else {
                window.web3 = new Web3(ethereum);
                load();
                if (typeof ethereum.on !== 'undefined') {
                    ethereum.on('chainChanged', load);
                    ethereum.on('accountsChanged', load);
                    ethereum.autoRefreshOnNetworkChange = false;
                }
            }
        };
        document.body.appendChild(script);
    };

    function load() {
        web3.eth.getChainId().then(function (newNetwork) {
            newNetwork = Number(newNetwork);
            if (newNetwork !== 42) {
                mcContract = null;
                account = null;
                document.getElementById('startMessage').innerHTML = 'switch to the kovan test network';
                document.getElementById('startMessage').style.display = 'block';
                document.getElementById('connect').style.display = 'none';
                document.getElementById('main').style.display = 'none';
                return;
            }
            if (mcContract === null) {
                account = null;
                mcContract = new web3.eth.Contract(mcAbi, mcAddress);
                mquadContract = new web3.eth.Contract(mquadAbi, mquadAddress);
                mcContract.events.allEvents().on('data', function () {
                    if (mcContract !== null && account !== null) {
                        loadMc(false);
                    }
                });
                mquadContract.events.allEvents().on('data', function () {
                    if (mcContract !== null && account !== null) {
                        loadMquad(false);
                    }
                });
            }

            web3.eth.getAccounts().then(function (accounts) {
                if (accounts.length === 0) {
                    account = null;
                    document.getElementById('startMessage').style.display = 'none';
                    document.getElementById('connect').style.display = 'block';
                    document.getElementById('main').style.display = 'none';
                    return;
                }
                var newAccount = web3.utils.toChecksumAddress(accounts[0]);
                if (newAccount === account) {
                    return;
                }
                account = newAccount;
                document.getElementById('startMessage').style.display = 'none';
                document.getElementById('connect').style.display = 'none';
                document.getElementById('administrator').style.display = 'none';
                document.getElementById('main').style.display = 'block';
                mquadContract.methods.administrators(account).call().then(function (result) {
                    if (result) {
                        document.getElementById('administrator').style.display = 'block';
                    }
                });
                loadMc(true);
                loadMquad(true);
            });
        }).catch(function (error) {
            console.error(error);
            if (error.message) {
                error = error.message;
            }
            alert(error);
        });
    }

    function connect() {
        if (typeof window.ethereum === 'undefined') {
            alert('ethereum is not loaded');
            return;
        }

        new Promise(function (resolve) {
            if (typeof ethereum.request === 'undefined') {
                ethereum.enable().then(resolve);
            } else {
                ethereum.request({method: 'eth_requestAccounts'}).then(resolve);
            }
        }).catch(function (error) {
            console.error(error);
            if (error.message) {
                error = error.message;
            }
            alert(error);
        });
    }

    function loadMc(clear) {
        if (clear) {
            document.getElementById('balance').innerHTML = '...';
        }

        mcContract.methods.balanceOf(account).call().then(function (result) {
            result = new BigNumber(result).shiftedBy(-18);
            if (result.isZero()) {
                document.getElementById('balance').removeAttribute('title');
                document.getElementById('balance').innerHTML = '0';
            } else {
                document.getElementById('balance').title = result.toFixed(18);
                result = result.toFixed(3, BigNumber.ROUND_DOWN);
                document.getElementById('balance').innerHTML = result;
            }
        });
    }

    function loadMquad(clear) {
        var thisLoader = ++loader;
        if (clear) {
            document.getElementById('totalAdministrators').innerHTML = '...';
            document.getElementById('poolBalance').innerHTML = '...';
            document.getElementById('round').innerHTML = '...';
        }
        document.getElementById('pendingAdministrators').innerHTML = '';
        document.getElementById('pendingProjects').innerHTML = '<p class="center">loading...</p>';
        document.getElementById('projects').innerHTML = '<p class="center">loading...</p>';

        mquadContract.methods.totalAdministrators().call().then(function (result) {
            document.getElementById('totalAdministrators').innerHTML = result;
        });
        mquadContract.methods.fundSum().call().then(function (result) {
            result = new BigNumber(result).shiftedBy(-18);
            if (result.isZero()) {
                document.getElementById('poolBalance').removeAttribute('title');
                document.getElementById('poolBalance').innerHTML = '0';
            } else {
                document.getElementById('poolBalance').title = result.toFixed(18);
                result = result.toFixed(3, BigNumber.ROUND_DOWN);
                document.getElementById('poolBalance').innerHTML = result;
            }
        });
        mquadContract.methods.stopSeconds().call().then(function (stop) {
            if (stop === '0') {
                document.getElementById('round').innerHTML = 'hasn\'t started yet';
            } else {
                document.getElementById('round').innerHTML = 'will end in ' +
                    new Date(stop * 1000).toISOString();
            }
        });
        mquadContract.methods.totalPendingAdministrators().call().then(function (total) {
            if (thisLoader !== loader) {
                return;
            }
            total = Number(total);
            for (var i = 0; i < total; i++) {
                let p = document.createElement('p');
                let address, text;
                mquadContract.methods.pendingAdministrators(i).call().then(function (result) {
                    address = result;
                    var button = document.createElement('button');
                    button.className = 'link';
                    button.onclick = function () {
                        document.getElementById('administratorAddress').value = address;
                    };
                    button.innerHTML = address;
                    p.appendChild(button);
                    return mquadContract.methods.administrators(address).call();
                }).then(function (administrator) {
                    text = ' - is ';
                    if (!administrator) {
                        text += 'not ';
                    }
                    text += 'administrator, votes to ';
                    text += administrator ? 'remove' : 'add';
                    text += ' - ';
                    return mquadContract.methods.totalVotesForAdministrator(address).call();
                }).then(function (votes) {
                    var span = document.createElement('span');
                    span.innerHTML = text + votes;
                    p.appendChild(span);
                    if (thisLoader === loader) {
                        document.getElementById('pendingAdministrators').appendChild(p);
                    }
                });
            }
        });
        mquadContract.methods.totalProjects().call().then(function (total) {
            if (thisLoader !== loader) {
                return;
            }
            total = Number(total);
            var data = [];
            if (total === 0 && thisLoader === loader) {
                displayProjects(data);
            }
            for (var i = 0; i < total; i++) {
                mquadContract.methods.projectAddresses(i).call().then(function (address) {
                    mquadContract.methods.projects(address).call().then(function (project) {
                        project.address = address;
                        data.push(project);
                        if (data.length === total && thisLoader === loader) {
                            displayProjects(data);
                        }
                    });
                });
            }
        });
    }

    function displayProjects(data) {
        var qsum = new BigNumber(0);
        document.getElementById('pendingProjects').innerHTML = '';
        for (var i = 0; i < data.length; i++) {
            if (!data[i].approved) {
                let p = document.createElement('p');
                let button = document.createElement('button');
                let address = data[i].address;
                button.className = 'link';
                button.onclick = function () {
                    document.getElementById('approveAddress').value = address;
                };
                button.innerHTML = address;
                p.appendChild(button);
                let span = document.createElement('span');
                span.innerHTML = ' - ' + web3.utils.hexToUtf8(data[i].link);
                p.appendChild(span);
                document.getElementById('pendingProjects').appendChild(p);
            } else {
                qsum = qsum.plus(new BigNumber(data[i].sqsum).pow(2));
            }
        }
        if (document.getElementById('pendingProjects').innerHTML === '') {
            document.getElementById('pendingProjects').innerHTML =
                '<p class="center">there are no unapproved projects</p>';
        }

        var fundSum = document.getElementById('poolBalance').title;
        if (fundSum === '') {
            fundSum = new BigNumber(0);
        } else {
            fundSum = new BigNumber(fundSum).shiftedBy(18);
        }
        document.getElementById('projects').innerHTML = '';
        for (var i = 0; i < data.length; i++) {
            if (data[i].approved) {
                let p = document.createElement('p');
                let button = document.createElement('button');
                let address = data[i].address;
                button.className = 'link';
                button.onclick = function () {
                    document.getElementById('voteAddress').value = address;
                };
                button.innerHTML = address;
                p.appendChild(button);
                let span = document.createElement('span');
                span.innerHTML = ' - ' + web3.utils.hexToUtf8(data[i].link);
                p.appendChild(span);
                document.getElementById('projects').appendChild(p);
                if (!qsum.isZero()) {
                    let line = document.createElement('p');
                    line.className = 'line';
                    let text = 'funded: ';
                    text += new BigNumber(data[i].sum).shiftedBy(-18).toFixed(3, BigNumber.ROUND_DOWN);
                    text += ' , matched: ';
                    text += new BigNumber(data[i].sqsum).pow(2).multipliedBy(fundSum).div(qsum)
                        .shiftedBy(-18).toFixed(3, BigNumber.ROUND_DOWN);
                    text += ' M+C';
                    line.innerHTML = text;
                    document.getElementById('projects').appendChild(line);
                }
            }
        }
        if (document.getElementById('projects').innerHTML === '') {
            document.getElementById('projects').innerHTML =
                '<p class="center">there are no projects</p>';
        }
    }

    function administrator(add) {
        if (blocked) {
            alert('confirm or reject previous tx');
            return;
        }
        blocked = true;
        var address, message;
        document.getElementById('administratorAddressHint').innerHTML = '';
        new Promise(function (resolve, reject) {
            address = document.getElementById('administratorAddress').value;
            if (!web3.utils.isAddress(address)) {
                document.getElementById('administratorAddressHint').innerHTML = 'address is incorrect';
                reject();
            } else {
                resolve();
            }
        }).then(function () {
            return mquadContract.methods.administrators(address).call();
        }).then(function (isAdministrator) {
            if (Boolean(isAdministrator) === add) {
                document.getElementById('administratorAddressHint').innerHTML =
                    'address is' + (isAdministrator ? ' ' : ' not ') + 'administrator';
                throw new Error();
            } else if (!add && document.getElementById('totalAdministrators').innerHTML === '1') {
                document.getElementById('administratorAddressHint').innerHTML = 'single administrator';
                throw new Error();
            }
            return mquadContract.methods.haveVotedForAdministrator(address).call({from: account});
        }).then(function (voted) {
            if (Boolean(voted)) {
                document.getElementById('administratorAddressHint').innerHTML = 'already voted';
                throw new Error();
            }
            mquadContract.methods.voteForAdministrator(address, add).send({
                from: account
            }).on('transactionHash', function (hash) {
                message = printLog(hash);
                blocked = false;
            }).on('confirmation', function (confirmationNumber, receipt) {
                if (confirmationNumber != 0) {
                    return;
                }
                if (!receipt.status) {
                    message.innerHTML = ' - rejected';
                } else {
                    message.innerHTML = ' - voted to ' + (add ? ' add ' : ' remove ') + address;
                }
            }).catch(function (error) {
                console.error(error);
                if (error.message) {
                    error = error.message;
                }
                alert(error);
                blocked = false;
            });
        }).catch(function () {
            blocked = false;
        });
    }

    function funder(add) {
        if (blocked) {
            alert('confirm or reject previous tx');
            return;
        }
        blocked = true;
        var address, message;
        document.getElementById('funderAddressHint').innerHTML = '';
        new Promise(function (resolve, reject) {
            address = document.getElementById('funderAddress').value;
            if (!web3.utils.isAddress(address)) {
                document.getElementById('funderAddressHint').innerHTML = 'address is incorrect';
                reject();
            } else {
                resolve();
            }
        }).then(function () {
            mquadContract.methods.funder(address, add).send({
                from: account
            }).on('transactionHash', function (hash) {
                message = printLog(hash);
                blocked = false;
            }).on('confirmation', function (confirmationNumber, receipt) {
                if (confirmationNumber != 0) {
                    return;
                }
                if (!receipt.status) {
                    message.innerHTML = ' - rejected';
                } else {
                    message.innerHTML = ' - funder ' + address + (add ? ' is added' : ' is removed');
                }
            }).catch(function (error) {
                console.error(error);
                if (error.message) {
                    error = error.message;
                }
                alert(error);
                blocked = false;
            });
        }).catch(function () {
            blocked = false;
        });
    }

    function start() {
        if (blocked) {
            alert('confirm or reject previous tx');
            return;
        }
        blocked = true;
        var stopSeconds, message;
        document.getElementById('startHoursHint').innerHTML = '';
        new Promise(function (resolve, reject) {
            stopSeconds = new BigNumber(document.getElementById('startHours').value);
            if (stopSeconds.isNaN()) {
                document.getElementById('startHoursHint').innerHTML = 'enter a number';
                reject();
            } else if (stopSeconds.lt(0.1)) {
                document.getElementById('startHoursHint').innerHTML = 'enter a value greater than 0.1';
                reject();
            } else {
                stopSeconds = Math.trunc(new Date().getTime() / 1000 + stopSeconds.toNumber() * 3600);
                resolve();
            }
        }).then(function () {
            return mquadContract.methods.stopSeconds().call();
        }).then(function (stop) {
            if (stop !== '0') {
                document.getElementById('startHoursHint').innerHTML = 'already started';
                throw new Error();
            }
            mquadContract.methods.start(stopSeconds).send({
                from: account
            }).on('transactionHash', function (hash) {
                message = printLog(hash);
                blocked = false;
            }).on('confirmation', function (confirmationNumber, receipt) {
                if (confirmationNumber != 0) {
                    return;
                }
                if (!receipt.status) {
                    message.innerHTML = ' - rejected';
                } else {
                    message.innerHTML = ' - started until ' + new Date(stopSeconds * 1000).toISOString();
                }
            }).catch(function (error) {
                console.error(error);
                if (error.message) {
                    error = error.message;
                }
                alert(error);
                blocked = false;
            });
        }).catch(function () {
            blocked = false;
        });
    }

    function approve() {
        if (blocked) {
            alert('confirm or reject previous tx');
            return;
        }
        blocked = true;
        var address, message;
        document.getElementById('approveAddressHint').innerHTML = '';
        new Promise(function (resolve, reject) {
            address = document.getElementById('approveAddress').value;
            if (!web3.utils.isAddress(address)) {
                document.getElementById('approveAddressHint').innerHTML = 'address is incorrect';
                reject();
            } else {
                resolve();
            }
        }).then(function () {
            return mquadContract.methods.stopSeconds().call();
        }).then(function (stop) {
            stop = Number(stop);
            if (stop < (new Date().getTime() / 1000)) {
                document.getElementById('approveAddressHint').innerHTML = 'finished';
                throw new Error();
            }
            return mquadContract.methods.projects(address).call();
        }).then(function (project) {
            if (project.link === null) {
                document.getElementById('approveAddressHint').innerHTML = 'not exist';
                throw new Error();
            } else if (project.approved) {
                document.getElementById('approveAddressHint').innerHTML = 'already approved';
                throw new Error();
            }
            mquadContract.methods.approve(address).send({
                from: account
            }).on('transactionHash', function (hash) {
                message = printLog(hash);
                blocked = false;
            }).on('confirmation', function (confirmationNumber, receipt) {
                if (confirmationNumber != 0) {
                    return;
                }
                if (!receipt.status) {
                    message.innerHTML = ' - rejected';
                } else {
                    message.innerHTML = ' - ' + address + ' approved';
                }
            }).catch(function (error) {
                console.error(error);
                if (error.message) {
                    error = error.message;
                }
                alert(error);
                blocked = false;
            });
        }).catch(function () {
            blocked = false;
        });
    }

    function finish() {
        if (blocked) {
            alert('confirm or reject previous tx');
            return;
        }
        blocked = true;
        var message;
        document.getElementById('finishHint').innerHTML = '';
        mquadContract.methods.stopSeconds().call().then(function (stop) {
            if (stop === '0') {
                document.getElementById('finishHint').innerHTML = 'not started';
                throw new Error();
            }
            mquadContract.methods.finish().send({
                from: account
            }).on('transactionHash', function (hash) {
                message = printLog(hash);
                blocked = false;
            }).on('confirmation', function (confirmationNumber, receipt) {
                if (confirmationNumber != 0) {
                    return;
                }
                if (!receipt.status) {
                    message.innerHTML = ' - rejected';
                } else {
                    message.innerHTML = ' - finished';
                }
            }).catch(function (error) {
                console.error(error);
                if (error.message) {
                    error = error.message;
                }
                alert(error);
                blocked = false;
            });
        }).catch(function () {
            blocked = false;
        });
    }

    function pool() {
        if (blocked) {
            alert('confirm or reject previous tx');
            return;
        }
        blocked = true;
        var value, message;
        document.getElementById('poolValueHint').innerHTML = '';
        new Promise(function (resolve, reject) {
            value = new BigNumber(document.getElementById('poolValue').value);
            if (document.getElementById('balance').title === '') {
                document.getElementById('poolValueHint').innerHTML = 'no M+C';
                reject();
            } else if (value.isNaN()) {
                document.getElementById('poolValueHint').innerHTML = 'enter a number';
                reject();
            } else if (!value.isPositive()) {
                document.getElementById('poolValueHint').innerHTML = 'enter a positive number';
                reject();
            } else if (value.gt(new BigNumber(document.getElementById('balance').title))) {
                document.getElementById('poolValueHint').innerHTML = 'not enough M+C';
                reject();
            } else {
                resolve();
            }
        }).then(function () {
            return mquadContract.methods.stopSeconds().call();
        }).then(function (stop) {
            stop = Number(stop);
            if (stop !== 0 && stop < (new Date().getTime() / 1000)) {
                document.getElementById('poolValueHint').innerHTML = 'finished';
                throw new Error();
            }
            mquadContract.methods.addFunds(value.shiftedBy(18).toFixed(0)).send({
                from: account
            }).on('transactionHash', function (hash) {
                message = printLog(hash);
                blocked = false;
            }).on('confirmation', function (confirmationNumber, receipt) {
                if (confirmationNumber != 0) {
                    return;
                }
                if (!receipt.status) {
                    message.innerHTML = ' - rejected';
                } else {
                    message.innerHTML = ' - sent ' + value + ' M+C';
                }
            }).catch(function (error) {
                console.error(error);
                if (error.message) {
                    error = error.message;
                }
                alert(error);
                blocked = false;
            });
        }).catch(function () {
            blocked = false;
        });
    }

    function addProject() {
        if (blocked) {
            alert('confirm or reject previous tx');
            return;
        }
        blocked = true;
        var address, link, message;
        document.getElementById('projectAddressHint').innerHTML = '';
        document.getElementById('projectLinkHint').innerHTML = '';
        new Promise(function (resolve, reject) {
            address = document.getElementById('projectAddress').value;
            link = document.getElementById('projectLink').value;
            if (!web3.utils.isAddress(address)) {
                document.getElementById('projectAddressHint').innerHTML = 'address is incorrect';
                reject();
            } else if (link === '') {
                document.getElementById('projectLinkHint').innerHTML = 'empty link';
                reject();
            } else {
                resolve();
            }
        }).then(function () {
            return mquadContract.methods.stopSeconds().call();
        }).then(function (stop) {
            stop = Number(stop);
            if (stop < (new Date().getTime() / 1000)) {
                document.getElementById('projectAddressHint').innerHTML = 'finished';
                throw new Error();
            }
            return mquadContract.methods.projects(address).call();
        }).then(function (project) {
            if (project.link !== null) {
                document.getElementById('projectAddressHint').innerHTML = 'already added';
                throw new Error();
            }
            mquadContract.methods.addProject(address, web3.utils.utf8ToHex(link)).send({
                from: account
            }).on('transactionHash', function (hash) {
                message = printLog(hash);
                blocked = false;
            }).on('confirmation', function (confirmationNumber, receipt) {
                if (confirmationNumber != 0) {
                    return;
                }
                if (!receipt.status) {
                    message.innerHTML = ' - rejected';
                } else {
                    message.innerHTML = ' - project ' + address + ' is added';
                }
            }).catch(function (error) {
                console.error(error);
                if (error.message) {
                    error = error.message;
                }
                alert(error);
                blocked = false;
            });
        }).catch(function () {
            blocked = false;
        });
    }

    function vote() {
        if (blocked) {
            alert('confirm or reject previous tx');
            return;
        }
        blocked = true;
        var address, value, message;
        document.getElementById('voteAddressHint').innerHTML = '';
        document.getElementById('voteValueHint').innerHTML = '';
        new Promise(function (resolve, reject) {
            address = document.getElementById('voteAddress').value;
            value = new BigNumber(document.getElementById('voteValue').value);
            if (!web3.utils.isAddress(address)) {
                document.getElementById('voteAddressHint').innerHTML = 'address is incorrect';
                reject();
            } else if (document.getElementById('balance').title === '') {
                document.getElementById('voteValueHint').innerHTML = 'no M+C';
                reject();
            } else if (value.isNaN()) {
                document.getElementById('voteValueHint').innerHTML = 'enter a number';
                reject();
            } else if (!value.isPositive()) {
                document.getElementById('voteValueHint').innerHTML = 'enter a positive number';
                reject();
            } else if (value.gt(new BigNumber(document.getElementById('balance').title))) {
                document.getElementById('voteValueHint').innerHTML = 'not enough M+C';
                reject();
            } else {
                resolve();
            }
        }).then(function () {
            return mquadContract.methods.stopSeconds().call();
        }).then(function (stop) {
            stop = Number(stop);
            if (stop < (new Date().getTime() / 1000)) {
                document.getElementById('voteAddressHint').innerHTML = 'finished';
                throw new Error();
            }
            return mquadContract.methods.funders(account).call();
        }).then(function (funder) {
            if (!Boolean(funder)) {
                document.getElementById('voteAddressHint').innerHTML = 'not a funder';
                throw new Error();
            }
            return mquadContract.methods.projects(address).call();
        }).then(function (project) {
            if (project.link === null) {
                document.getElementById('voteAddressHint').innerHTML = 'not exist';
                throw new Error();
            } else if (!project.approved) {
                document.getElementById('voteAddressHint').innerHTML = 'not approveed';
                throw new Error();
            }
            return mquadContract.methods.haveFundProject(address).call({from: account});
        }).then(function (funded) {
            if (Boolean(funded)) {
                document.getElementById('voteAddressHint').innerHTML = 'already funded';
                throw new Error();
            }
            mquadContract.methods.fundProject(address, value.shiftedBy(18).toFixed(0)).send({
                from: account
            }).on('transactionHash', function (hash) {
                message = printLog(hash);
                blocked = false;
            }).on('confirmation', function (confirmationNumber, receipt) {
                if (confirmationNumber != 0) {
                    return;
                }
                if (!receipt.status) {
                    message.innerHTML = ' - rejected';
                } else {
                    message.innerHTML = ' - voted to project ' + address;
                }
            }).catch(function (error) {
                console.error(error);
                if (error.message) {
                    error = error.message;
                }
                alert(error);
                blocked = false;
            });
        }).catch(function () {
            blocked = false;
        });
    }

    function printLog(hash) {
        var p = document.createElement('p');
        p.classList.add('onestring');
        var span = document.createElement('span');
        span.innerHTML = 'tx ';
        p.appendChild(span);
        var a = document.createElement('a');
        a.innerHTML = hash;
        a.href = 'https://kovan.etherscan.io/tx/' + hash;
        a.setAttribute('target', '_blank');
        a.setAttribute('rel', 'noopener');
        p.appendChild(a);
        span = document.createElement('span');
        span.innerHTML = ' - unconfirmed';
        p.appendChild(span);
        var div = document.getElementById('log');
        div.insertBefore(p, div.firstChild);
        return span;
    }
})();