//SPDX-License-Identifier:MIT
pragma solidity ^0.8.24;

contract Modifiers {

// Create a modifier named 'myModifier' that requires a value to be greater than 10

    modifier myModifier(uint value) {

        require(value > 10, 'Value must be bigger than 10');
        _;
    }
}
