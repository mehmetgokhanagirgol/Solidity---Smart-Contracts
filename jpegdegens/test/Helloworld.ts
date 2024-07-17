import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";
import { expect } from "chai";

describe("hello world", function() {
    it("should say hi", async function() {
        //1. setup environment
        //2. deploy our contract
        //3. call our functions to test

        //2.
        // hardhat compiled your contract into a json file and this goes and gets it.
        const HelloWorld = await ethers.getContractFactory("HelloWorld");
        // deploys it to a ethereum network
        const hello = await HelloWorld.deploy();
        await hello.deployed();
        
        expect(await hello.hello()).to.equal("Hello, World")
    })
})