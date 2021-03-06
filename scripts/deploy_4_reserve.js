const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {
  // URL from where we can extract the metadata
  // const metadataURL = "ipfs://.../";

  let signers = await ethers.getSigners()
  let user0 = signers[0].address
  const provider = waffle.provider;
  
  const user0balanceETH = await provider.getBalance(user0);
  console.log(user0, ethers.utils.formatEther(user0balanceETH))

  // return

  const _bond = "0x51eC0B0b84Fa437023922d6e5EfCEb8056cd9716"
  const theStartingBlock = await provider.getBlockNumber();

  const CONTRACT_object = await ethers.getContractFactory("TheOpenFarmReserve");
  const deployedContract = await CONTRACT_object.deploy(_bond, theStartingBlock+69420);
  await deployedContract.deployed();
  console.log("Contract: Farm Reserve | Address:", deployedContract.address);
  // let init_hash = await deployedContract.INIT_CODE_PAIR_HASH()
  // console.log("init_hash:", init_hash);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
