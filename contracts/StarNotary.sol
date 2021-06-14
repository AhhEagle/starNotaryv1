pragma solidity >=0.4.22 <0.9.0;

contract StarNotary{
    string public starName;
    address public starOwner;
    
    event starClaimed(address owner);
    
    constructor() public{
        starName = "My star";
    }
    function claimStar() public{
        starOwner = msg.sender;
        emit starClaimed(starOwner);
    }
}