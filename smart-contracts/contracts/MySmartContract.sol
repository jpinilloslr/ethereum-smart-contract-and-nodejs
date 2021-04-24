// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

contract MySmartContract {
  string public message;

  constructor() {
    message = "Hello world";
  }

  function set(string memory newMessage) public {
    message = newMessage;
  }

  function get() public view returns (string memory){
    return message;
  }
}
