// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract LoggingDemo {
    uint256 public saldo;

    event SaldoBerubah(address indexed user, uint256 saldoBaru);

    function deposit(uint256 _amount) public {
        require(_amount > 0, "Jumlah harus lebih dari 0!");
        saldo += _amount;
        emit SaldoBerubah(msg.sender, saldo); // Logging saldo baru
    }
}
