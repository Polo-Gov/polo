const { ethers } = require("hardhat");

async function main() {
  // Load the NFT contract artifacts
  const Factory = await ethers.getContractFactory("Factory");
  // const Imovel = await ethers.getContractFactory("Imovel");

  // Deploy the contract

  const factoryContract = await Factory.deploy([
    "0x23511a29ad92D438823454C26812b7A604f5186F",
  ]);
  await factoryContract.deployed();

  // const imovelContract = await Imovel.deploy(
  //   ["0x23511a29ad92D438823454C26812b7A604f5186F"],
  //   1,
  //   [213456789],
  //   ["0x23511a29ad92D438823454C26812b7A604f5186F"],
  //   [true],
  //   [["Minha condicao"]],
  //   [12],
  //   [13],
  //   [[14]],
  //   [[15]]
  // );
  // await imovelContract.deployed();

  // Print the address of the NFT contract
  console.log("Factory contract deployed to:", factoryContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
