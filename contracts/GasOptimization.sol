// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract GasOptimized {
    string public data;

    // BOROS GAS! (Mengupdate storage langsung)
    function updateBoros(string memory _newData) public {
        data = _newData;
    }

    // LEBIH HEMAT GAS! (Menggunakan memory dulu, baru update storage sekali)
    function updateHemat(string calldata _newData) public {
        data = _newData;
    }
}
