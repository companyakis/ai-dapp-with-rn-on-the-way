//SPDX-License-Identifier:MIT
pragma solidity ^0.8.24;

contract Validations {

// Use 'revert' with a custom error message to stop execution if a condition is met

    function validateNumber(uint number) public pure {

        if (number > 50) {

            revert("");
        }
    }
}
