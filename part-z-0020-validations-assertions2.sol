//SPDX-License-Identifier:MIT
pragma solidity ^0.8.24;

contract Validations {

// Use 'require' with a custom error message to validate that a number is less than 20

    function validateNumber(uint number) public pure {

        require(number <  20, 'Number must be smaller than 20');
    }
}
