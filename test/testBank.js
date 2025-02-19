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
