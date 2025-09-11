//SPDX-License-Identifier:MIT
pragma solidity ^0.8.24;

contract Modifiers {

// Create a function named 'myFunction' that uses the 'myModifier' modifier

    modifier myModifier {

        require(msg.sender == address(0), 'some info');
        _;
    }

    function myFunction() public myModifier {
      
    }
}
