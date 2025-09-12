//SPDX-License-Identifier:MIT
pragma solidity ^0.8.24;

contract Validations {

// Use 'require' to validate that a number is greater than 10

    function validateNumber(uint number) public pure {

        require(number > 10, "Number must be greater than 10");
    }
}
