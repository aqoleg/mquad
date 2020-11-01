# mquad

This is a submission for the quadratic funding [hackathon](https://gitcoin.co/issue/MPlus4Climate/MPlusToolKit/3/100023836).

## precondition

Use any up-to-date browser with [metamask](https://metamask.io) installed.

## usage

Import private [keys](https://github.com/aqoleg/mquad/blob/master/keys) into metamask.
There are 3 types of accounts:
* administrators - can start/finish the QF voting round, approve funders and projects
* projects - will receive tokens after funding is completed
* funders - M+C holders who can vote for projects

Open the [app](https://aqoleg.github.io/mquad/), select kovan testnet and connect with metamask.
The app has different interfaces for administrators and for any other account, depending on which account is currently open.

1. Start QF round.

A QF round can be started by administrator, if the previous round is completed. QF round has a duration.

2. Add funds.

Any M+C token holder can add funds to the QF pool. These tokens will be distributed among projects based on the results of voting. During voting, tokens are placed in the contract. Tokens cannot be added after the end of the QF round.

3. Add projects.

Anyone can add a new project during the QF round. The entered address will receive tokens after voting.

4. Approve projects.

The administrator approve projects.

5. Funding.

Any approved address can QF-vote for any approved project utill the end of the QF round. One vote for each project is available. M+C tokens sent for voting are placed in the contract.

6. Finish.

Administrator can finish current QF-round at any time. This is the most gas-consuming operation. All funded tokens are distributed between projects using QF math. If there are no voted projects, all tokens remain in the contract for the next QF round. It is possible that some small number of tokens remain in the contract as a result of rounding errors.

I used [wtfisqf.com](https://wtfisqf.com) to check the correctness of qf calculations.

[Watch](https://aqoleg.github.io/mquad/docs/index.html) or [download](https://github.com/aqoleg/mquad/raw/master/docs/video.mp4) the demo video.

[Contract](https://kovan.etherscan.io/address/0x04151a909061d37daa770b9dd65db1c9bb830249) is deployed in the kovan testnet.

## contacts

Feel free to communicate.

aqoleg@pm.me

[t.me/aqoleg](https://t.me/aqoleg)