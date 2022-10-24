// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

// create HelloWorld contract having owner and message
contract HelloWorld {
  address public owner;
  string public message;

  // constructor
  constructor (string memory _message){
    message = _message;
    // set owner 
    owner = msg.sender;
  }
  function hello() public pure returns (string memory) {
    return "hello world again";
  }
//   method for setting the message
  function setMessage(string memory _message) public {
     require(msg.sender == owner);
     message = _message;
  }
}
