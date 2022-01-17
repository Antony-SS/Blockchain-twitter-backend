pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract MusicPortal {

    uint256 totalrecs;

    event NewSongRec(address indexed from, string link, string description, uint256 timestamp);

    struct Reccomendation {
        address reccomender;
        string link;
        string description;
        uint256 timestamp;
    }
    // will keep an array of all the reccomendations to this smart contract, not sustainable not advisable (gas fees) for larger applications, but this will do in this case
    Reccomendation[] reccomendations; 


    constructor() {
        console.log("Ant's First Smart Contract Project!");
    }

    function makeRec(string memory _link, string memory _description) public {
        totalrecs += 1;
        console.log("%s has given reccomendation with link %s and description %s", msg.sender, _link, _description);

        reccomendations.push(Reccomendation(msg.sender, _link, _description, block.timestamp));

        // emit this new event so front end can interact with it - remember that events can only be triggered by transactions on the blockchain
        emit NewSongRec(msg.sender, _link, _description, block.timestamp);

    }


    function getTotalRecs() public view returns (uint256) {
        console.log("We have %d total reccomendations!", totalrecs);
        return totalrecs;
    }

    function getAllRecs() public view returns (Reccomendation[] memory) {
        return reccomendations;
    }
}