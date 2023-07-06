import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config();

const PRIVATE_KEY: string = process.env.PRIVATE_KEY!;

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/" + process.env.SEPOLIA_URL,
      accounts: [PRIVATE_KEY],
    },
    mumbai: {
      url: "https://matic.getblock.io/04f401f9-44f5-4841-b934-71157c95af64/testnet/",
      accounts: [PRIVATE_KEY],
    },
    bsc: {
      url: "https://bsc-testnet.publicnode.com",
      accounts: [PRIVATE_KEY],
    },
  },
};

export default config;

// nfts
// mumbai = 0x670E9c8cb57b2C924dac907b214415C26D656693
// sepolia = 0x0fBFFDfFA75d47d4d60047523946820Be611AceB
// bsc = 0x70AB09705d2182690BB5366fa643D2C017BB8bE0

//crypto
// sepolia = 0xac65BFc5Aa4f481f0FC36CF4Ac39CEB264934dCd

//exchange
// sepolia = 0x9dfC54c43Bb7f46c3bA7E9892876DF60D35ff2f1
