// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Wallet {
    mapping(address => uint256) public balances;

    // Function buat deposit saldo
    function deposit(uint256 _amount) public {
        balances[msg.sender] += _amount;
    }

    // Function buat tarik saldo
    function withdraw(uint256 _amount) public {
        require(balances[msg.sender] >= _amount, "Saldo tidak cukup!");
        balances[msg.sender] -= _amount;
    }
}
