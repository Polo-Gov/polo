// const storage = require("../services/storage");
// const Storage = new storage();

// async function getStorage(req, res) {
//   try {
//     const data = await Storage.getStorage();
//     return res.status(200).send(data);
//   } catch (error) {
//     return res.status(400).send({ error: error.message });
//   }
// }
const dotenv = require("dotenv").config();
const { CeloProvider } = require("@celo-tools/celo-ethers-wrapper");
const { Contract, ethers, utils, providers } = require("ethers");

const storage = require("../build/contracts/Storage.json");
const { address } = require("../contractsAddress.json");

// Connecting to Alfajores testnet

const { CeloWallet } = require("@celo-tools/celo-ethers-wrapper");

async function getStorage(req, res) {
  const provider = new CeloProvider("https://alfajores-forno.celo-testnet.org");
  await provider.ready;

  const wallet = new CeloWallet(dotenv.parsed.PRIVATE_KEY, provider);
  try {
    const contrato = new ethers.Contract(address[0].storage, storage, wallet);
    providers.TransactionResponse = await contrato.retrieve();
    let data = await contrato.retrieve();
    // const txReceipt = await providers.TransactionResponse.wait();

    return res.status(200).send(data);
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
}
module.exports = {
  getStorage,
};
