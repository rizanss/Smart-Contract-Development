const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("EventLogger", function () {
  let contract;

  beforeEach(async function () {
    const Contract = await ethers.getContractFactory("EventLogger");
    contract = await Contract.deploy();
    await contract.deployed();
  });

  it("Should emit an event on logMessage", async function () {
    await expect(contract.logMessage("Hello, Blockchain!"))
      .to.emit(contract, "MessageLogged")
      .withArgs("Hello, Blockchain!");
  });
});
