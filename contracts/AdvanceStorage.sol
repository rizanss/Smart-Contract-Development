// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract StorageVsMemory {
    string public storageData = "Data di storage"; // Tersimpan di blockchain

    function ubahData(string memory _dataBaru) public {
        string memory sementara = _dataBaru; // Cuma ada selama function jalan
        storageData = sementara; // Baru masuk ke storage setelah function selesai
    }
}
