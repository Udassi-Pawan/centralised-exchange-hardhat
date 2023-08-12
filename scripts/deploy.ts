import { ethers } from "hardhat";

async function main() {
  const nftex = await ethers.deployContract("exchangeNFT");
  await nftex.waitForDeployment();
  console.log(`nftex deployed to ${nftex.target}`);

  const MyContract = await ethers.getContractFactory("exchange");
  const cryptex = await MyContract.deploy(nftex.target);
  await cryptex.waitForDeployment();
  console.log(`cryptex deployed to ${cryptex.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// sepolia
// nft = 0xe501d76c9CE7A84b67F75E29B39A354ef8754EDb
// exchange = 0x45121aE1B3AF6A27A55C841B614a8141F9CC1FFf

// mumbai =
// nft = 0xf3fdBC261db3A2d106c34003d81FFc0eaf06630F
// exchange = 0xbD7Fc8FE7EE97d671fcfFD42E077170A61Cf977b

// bsc
// nft = 0x007a68bE8D789E5E49936C5b10c6a569bAAc89B0
// exchange = 0x9935CE737276f30F8AE7038c21d991054B7A077f
