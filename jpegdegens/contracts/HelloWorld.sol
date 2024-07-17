// SPDX-License-Identifier: MIT
// tell solidity what compiler you expect, I expect at least this version
pragma solidity ^0.8.0;
// contract works like a class, state container and functions to mutate it. Like Redux
contract HelloWorld {
    function hello() public pure returns (string memory) {
        return "Hello, World";
    }
}
