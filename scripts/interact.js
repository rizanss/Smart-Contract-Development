const { ethers } = require("hardhat");

async function main() {
  const contractAddress = "YOUR_DEPLOYED_CONTRACT_ADDRESS";
  const Contract = await ethers.getContractFactory("SimpleBank");
  const contract = Contract.attach(contractAddress);

  const balance = await contract.getBalance();
  console.log("Current balance:", balance.toString());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// test/testBank.js
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SimpleBank", function () {
  let contract;
  let owner;

  beforeEach(async function () {
    const Contract = await ethers.getContractFactory("SimpleBank");
    contract = await Contract.deploy();
    await contract.deployed();
    [owner] = await ethers.getSigners();
  });

  it("Should allow deposit and withdrawal", async function () {
    await contract.deposit({ value: ethers.parseEther("10") });
    expect(await contract.getBalance()).to.equal(ethers.parseEther("10"));

    await contract.withdraw(ethers.parseEther("5"));
    expect(await contract.getBalance()).to.equal(ethers.parseEther("5"));
  });
});
