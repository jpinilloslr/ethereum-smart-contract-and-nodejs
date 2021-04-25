// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

contract MySmartContract {
  string public message = 'Hello world';

  function update(string memory value) public {
    message = value;
  }
}
