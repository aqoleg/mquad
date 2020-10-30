"use strict";

(function () {
    var mcAddress = '0xe0660bF997A5a2f18561Bd6a60412195359Be943';
    var mquadAddress = '0xeD4D9cA5A33CC2E9C8D389b808c54F9418927346';
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
        document.getElementById('pool').onclick = pool;
        document.getElementById('addProject').onclick = addProject;

        var script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js';
        script.onload = function () {
            document.getElementById('loading').style.display = 'none';
            if (typeof window.ethereum === 'undefined') {
                document.getElementById('install').style.display = 'block';
            } else {
                window.web3 = new Web3(ethereum);
                load();
                ethereum.on('chainChanged', load);
                ethereum.on('accountsChanged', load);
                ethereum.autoRefreshOnNetworkChange = false;
            }
        };
        document.body.appendChild(script);
    };

    function load() {
        ethereum.request({
            method: 'net_version'
        }).then(function (network) {
            if (Number(network) !== 42) {
                mcContract = null;
                account = null;
                document.getElementById('network').style.display = 'block';
                document.getElementById('connect').style.display = 'none';
                document.getElementById('administrator').style.display = 'none';
                document.getElementById('user').style.display = 'none';
                return;
            }
            if (mcContract === null) {
                document.getElementById('network').style.display = 'none';
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
            loadAccounts();
        }).catch(function (error) {
            console.error(error);
            if (error.message) {
                error = error.message;
            }
            alert(error);
        });

        function loadAccounts() {
            ethereum.request({
                method: 'eth_accounts'
            }).then(function (accounts) {
                if (accounts.length === 0) {
                    account = null;
                    document.getElementById('connect').style.display = 'block';
                    document.getElementById('administrator').style.display = 'none';
                    document.getElementById('user').style.display = 'none';
                } else {
                    var newAccount = web3.utils.toChecksumAddress(accounts[0]);
                    if (newAccount === account) {
                        return;
                    }
                    account = newAccount;
                    document.getElementById('connect').style.display = 'none';
                    document.getElementById('user').style.display = 'block';
                    mquadContract.methods.administrators(account).call().then(function (result) {
                        document.getElementById('administrator').style.display = result ? 'block' : 'none';
                    });
                    loadMc(true);
                    loadMquad(true);
                }
            });
        }
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
        }
        document.getElementById('pendingAdministrators').innerHTML = '';
        document.getElementById('pendingProjects').innerHTML = '';
        document.getElementById('projects').innerHTML = '';

        mquadContract.methods.totalAdministrators().call().then(function (result) {
            document.getElementById('totalAdministrators').innerHTML = result;
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
        mcContract.methods.balanceOf(mquadAddress).call().then(function (result) {
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
    }

    function connect() {
        ethereum.request({
            method: 'eth_requestAccounts'
        }).catch(function (error) {
            console.error(error);
            if (error.message) {
                error = error.message;
            }
            alert(error);
        });
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
            mquadContract.methods.addProject(address, link).send({
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