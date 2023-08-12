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

// sepoli =
// mumbai =
// bsc =

// ["11155111", "0xfC28ED155A3E23E6992eD3551c1822232FD2E9Ba"],
// ["80001", "0x565ef94Bd04e988C6b15dCE6C47D5716C0DD36c4"],
// ["97", "0x99528756Da1746779B34247fce6285d91A2c2868"],
