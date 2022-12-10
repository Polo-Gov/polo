const { ethers } = require("ethers");
const { abi: storage } = require("../build/contracts/Storage.json");
const { addresses } = require("../contractAddress.json");

const blockchainConnection = async () => {
  // const provider = new ethers.providers.JsonRpcProvider(process.env.BLOCKCHAIN_URL, parseInt(process.env.BLOCKCHAIN_CHAIN_ID))
  // const signer = provider.getSigner(process.env.BLOCKCHAIN_ACCOUNT_ADDRESS)
  // await signer.unlock(process.env.BLOCKCHAIN_ACCOUNT_PASSWORD)

  // return {
  //     provider,
  //     signer,
  // }
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  // MetaMask requires requesting permission to connect users accounts
  await provider.send("eth_requestAccounts", []);

  // The MetaMask plugin also allows signing transactions to
  // send ether and pay to change state within the blockchain.
  // For this, you need the account signer...
  const signer = provider.getSigner();
  return {
    provider,
    signer,
  };
};

const storage = async () => {
  const { provider, signer } = await blockchainConnection();
  const inteliFactory = new ethers.Contract(
    addresses.at(-1).storage,
    storage,
    provider
  );
  const inteliFactoryInstance = inteliFactory.connect(signer);

  return inteliFactoryInstance;
};

module.exports = {
  blockchainConnection,
  storage,
};
