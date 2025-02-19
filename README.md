# Smart-Contract-Development

##  Overview

Modul ini membahas konsep fundamental dalam pengembangan smart contract menggunakan Solidity. Kita akan membangun berbagai smart contract mulai dari yang sederhana hingga yang lebih kompleks, serta mengoptimalkan kode untuk efisiensi gas.

## Materi yang Dipelajari
1. HaloBlockchain.sol
   - Konsep dasar smart contract
   - Penyimpanan data on-chain
   - Penggunaan fungsi untuk update dan retrieve data
2. SimpleBank.sol
   - Implementasi smart contract untuk deposit dan withdraw ETH
   - Menggunakan mapping untuk menyimpan saldo pengguna
   - Fungsi deposit() dan withdraw() dengan validasi saldo
3. GasOptimization.sol
   - Teknik mengoptimalkan penggunaan gas
   - Penggunaan constant dan immutable
   - Optimasi loop dan struktur data
4. EventLogger.sol
   - Implementasi event dalam smart contract
   - Logging transaksi untuk meningkatkan transparansi
   - Error handling menggunakan require(), assert(), dan revert()
5. AdvancedStorage.sol
   - Perbedaan storage vs memory
   - Pengaruh penyimpanan data terhadap gas fee
   - Penggunaan struktur data yang lebih efisien

## Setup & Deployment
1. Install Dependencies
`` npm init -y ``
`` npm install --save-dev hardhat ethers chai mocha ``

2. Inisialisasi Hardhat
`` npx hardhat ``

3. Deploy Smart Contract
Jalankan script deploy.js:
`` npx hardhat run scripts/deploy.js --network localhost ``

4. Interaksi dengan Smart Contract
Gunakan interact.js untuk berinteraksi dengan kontrak setelah deploy.

5. Testing Smart Contract
Jalankan unit test untuk memastikan fungsi berjalan dengan baik:
`` npx hardhat test ``

---

Modul ini memberikan dasar kuat untuk pengembangan smart contract dengan Solidity, termasuk pemahaman storage, event logging, dan optimasi gas.
