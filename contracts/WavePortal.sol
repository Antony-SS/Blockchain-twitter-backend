pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WavePortal {

    uint256 totalsomething;

    constructor() {
        console.log("Ant's first smart contract!");
    }

    function doSomething() public {
        totalsomething += 1;
        console.log("%s did something", msg.sender);
    }

    function getTotalSomething() public view returns (uint256) {
        console.log("Total of %d somethings", totalsomething);
        return totalsomething;
    }

}