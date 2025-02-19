// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract HaloBlockchain {
    string public pesan;

    event PesanDiubah(address indexed pengirim, string pesanBaru);

    function updatePesan(string memory _pesan) public {
        pesan = _pesan;
        emit PesanDiubah(msg.sender, _pesan);
    }
}
