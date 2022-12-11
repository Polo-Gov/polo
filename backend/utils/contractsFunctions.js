const dotenv = require("dotenv").config();
const { CeloProvider } = require("@celo-tools/celo-ethers-wrapper");
const { Contract, ethers, utils, providers } = require("ethers");

const imoveis = require("../models/index.js");

const storage = require("../../blockchain/artifacts/contracts/imovel.sol/Imovel.json");
const { address } = require("../contractsAddress.json");

// Connecting to Alfajores testnet

const { CeloWallet } = require("@celo-tools/celo-ethers-wrapper");

async function addOwnerUnion(id, ownerAddress) {
  const provider = new CeloProvider("https://alfajores-forno.celo-testnet.org");
  await provider.ready;

  const wallet = new CeloWallet(dotenv.parsed.PRIVATE_KEY, provider);

  const query = await imoveis.imoveis.findOne({
    where: {
      id: id,
    },
  });

  try {
    const contrato = new ethers.Contract(
      query.dataValues.enderecoBlockchain,
      storage.abi,
      wallet
    );
    const response = await contrato.addOwnerUnion(ownerAddress);

    console.log("Teste", response);

    return response;
  } catch (error) {
    console.log("Erro", error.reason);
    return error.reason;
  }
}

async function owner(id) {
  const provider = new CeloProvider("https://alfajores-forno.celo-testnet.org");
  await provider.ready;

  const wallet = new CeloWallet(dotenv.parsed.PRIVATE_KEY, provider);

  const query = await imoveis.imoveis.findOne({
    where: {
      id: id,
    },
  });

  try {
    const contrato = new ethers.Contract(
      query.dataValues.enderecoBlockchain,
      storage.abi,
      wallet
    );
    console.log("Wallet: ", wallet);
    const response = await contrato.owner(wallet.address);

    console.log("Teste", response);

    return response;
  } catch (error) {
    console.log("Erro", error.reason);
    return error.reason;
  }
}

async function removeOwnerUnion(id, ownerAddress) {
  const provider = new CeloProvider("https://alfajores-forno.celo-testnet.org");
  await provider.ready;

  const wallet = new CeloWallet(dotenv.parsed.PRIVATE_KEY, provider);
  
  const query = await imoveis.imoveis.findOne({
    where: {
      id: id,
    },
  });

  try {
    const contrato = new ethers.Contract(
      query.dataValues.enderecoBlockchain,
      storage.abi,
      wallet
    );
    console.log(ownerAddress)
    const response = await contrato.removeOwnerUnion(ownerAddress);

    console.log("Teste", response);

    return response;
  } catch (error) {
    console.log("Erro", error.reason);
    return error.reason;
  }
}

async function addDono(
  id,
  ownerAddress,
  prazo,
  status,
  condicoes,
  valorCobranca,
  dataProxCobranca,
  datasRecebimento,
  valoresRecebimento
) {
  const provider = new CeloProvider("https://alfajores-forno.celo-testnet.org");
  await provider.ready;

  const wallet = new CeloWallet(dotenv.parsed.PRIVATE_KEY, provider);

  const query = await imoveis.imoveis.findOne({
    where: {
      id: id,
    },
  });

  console.log(query.dataValues.enderecoBlockchain);

  try {
    const contrato = new ethers.Contract(
      query.dataValues.enderecoBlockchain,
      storage.abi,
      wallet
    );
    const response = await contrato.removeOwnerUnion(
      ownerAddress,
      prazo,
      status,
      condicoes,
      valorCobranca,
      dataProxCobranca,
      datasRecebimento,
      valoresRecebimento
    );

    console.log("Teste", response);

    return response;
  } catch (error) {
    console.log("Erro", error.reason);
    return error.reason;
  }
}

async function removeDono(id, ownerAddress) {
  const provider = new CeloProvider("https://alfajores-forno.celo-testnet.org");
  await provider.ready;

  const wallet = new CeloWallet(dotenv.parsed.PRIVATE_KEY, provider);

  const query = await imoveis.imoveis.findOne({
    where: {
      id: id,
    },
  });

  console.log(query.dataValues.enderecoBlockchain);

  try {
    const contrato = new ethers.Contract(
      query.dataValues.enderecoBlockchain,
      storage.abi,
      wallet
    );
    const response = await contrato.removeDono(ownerAddress);

    console.log("Teste", response);

    return response;
  } catch (error) {
    console.log("Erro", error.reason);
    return error.reason;
  }
}

async function updateAcoes(id, ownerAddress, acao) {
  const provider = new CeloProvider("https://alfajores-forno.celo-testnet.org");
  await provider.ready;

  const wallet = new CeloWallet(dotenv.parsed.PRIVATE_KEY, provider);

  const query = await imoveis.imoveis.findOne({
    where: {
      id: id,
    },
  });

  console.log(query.dataValues.enderecoBlockchain);

  try {
    const contrato = new ethers.Contract(
      query.dataValues.enderecoBlockchain,
      storage.abi,
      wallet
    );
    const response = await contrato.updateAcoes(ownerAddress, acao);

    console.log("Teste", response);

    return response;
  } catch (error) {
    console.log("Erro", error.reason);
    return error.reason;
  }
}

async function updatePrazo(id, ownerAddress, prazo) {
  const provider = new CeloProvider("https://alfajores-forno.celo-testnet.org");
  await provider.ready;

  const wallet = new CeloWallet(dotenv.parsed.PRIVATE_KEY, provider);

  const query = await imoveis.imoveis.findOne({
    where: {
      id: id,
    },
  });

  console.log(query.dataValues.enderecoBlockchain);

  try {
    const contrato = new ethers.Contract(
      query.dataValues.enderecoBlockchain,
      storage.abi,
      wallet
    );
    const response = await contrato.updatePrazo(ownerAddress, prazo);

    console.log("Teste", response);

    return response;
  } catch (error) {
    console.log("Erro", error.reason);
    return error.reason;
  }
}

async function updateStatus(id, ownerAddress, status) {
  const provider = new CeloProvider("https://alfajores-forno.celo-testnet.org");
  await provider.ready;

  const wallet = new CeloWallet(dotenv.parsed.PRIVATE_KEY, provider);

  const query = await imoveis.imoveis.findOne({
    where: {
      id: id,
    },
  });

  console.log(query.dataValues.enderecoBlockchain);

  try {
    const contrato = new ethers.Contract(
      query.dataValues.enderecoBlockchain,
      storage.abi,
      wallet
    );
    const response = await contrato.updateStatus(ownerAddress, status);

    console.log("Teste", response);

    return response;
  } catch (error) {
    console.log("Erro", error.reason);
    return error.reason;
  }
}

async function updateValorCobranca(id, ownerAddress, valorCobranca) {
  const provider = new CeloProvider("https://alfajores-forno.celo-testnet.org");
  await provider.ready;

  const wallet = new CeloWallet(dotenv.parsed.PRIVATE_KEY, provider);

  const query = await imoveis.imoveis.findOne({
    where: {
      id: id,
    },
  });

  console.log(query.dataValues.enderecoBlockchain);

  try {
    const contrato = new ethers.Contract(
      query.dataValues.enderecoBlockchain,
      storage.abi,
      wallet
    );
    const response = await contrato.updateValorCobranca(
      ownerAddress,
      valorCobranca
    );

    console.log("Teste", response);

    return response;
  } catch (error) {
    console.log("Erro", error.reason);
    return error.reason;
  }
}

async function updateDataProxCobranca(id, ownerAddress, data) {
  const provider = new CeloProvider("https://alfajores-forno.celo-testnet.org");
  await provider.ready;

  const wallet = new CeloWallet(dotenv.parsed.PRIVATE_KEY, provider);

  const query = await imoveis.imoveis.findOne({
    where: {
      id: id,
    },
  });

  console.log(query.dataValues.enderecoBlockchain);

  try {
    const contrato = new ethers.Contract(
      query.dataValues.enderecoBlockchain,
      storage.abi,
      wallet
    );
    const response = await contrato.updateDataProxCobranca(ownerAddress, data);

    console.log("Teste", response);

    return response;
  } catch (error) {
    console.log("Erro", error.reason);
    return error.reason;
  }
}

async function updateCondicoes(id, ownerAddress, condicoes) {
  const provider = new CeloProvider("https://alfajores-forno.celo-testnet.org");
  await provider.ready;

  const wallet = new CeloWallet(dotenv.parsed.PRIVATE_KEY, provider);

  const query = await imoveis.imoveis.findOne({
    where: {
      id: id,
    },
  });

  console.log(query.dataValues.enderecoBlockchain);

  try {
    const contrato = new ethers.Contract(
      query.dataValues.enderecoBlockchain,
      storage.abi,
      wallet
    );
    const response = await contrato.updateCondicoes(ownerAddress, condicoes);

    console.log("Teste", response);

    return response;
  } catch (error) {
    console.log("Erro", error.reason);
    return error.reason;
  }
}

async function updateHistoricoRecebimento(id, ownerAddress, hist) {
  const provider = new CeloProvider("https://alfajores-forno.celo-testnet.org");
  await provider.ready;

  const wallet = new CeloWallet(dotenv.parsed.PRIVATE_KEY, provider);

  const query = await imoveis.imoveis.findOne({
    where: {
      id: id,
    },
  });

  console.log(query.dataValues.enderecoBlockchain);

  try {
    const contrato = new ethers.Contract(
      query.dataValues.enderecoBlockchain,
      storage.abi,
      wallet
    );
    const response = await contrato.updateHistoricoRecebimento(
      ownerAddress,
      hist
    );

    console.log("Teste", response);

    return response;
  } catch (error) {
    console.log("Erro", error.reason);
    return error.reason;
  }
}
module.exports = {
  addOwnerUnion,
  removeOwnerUnion,
  addDono,
  removeDono,
  updateAcoes,
  updatePrazo,
  updateStatus,
  updateCondicoes,
  updateValorCobranca,
  updateDataProxCobranca,
  updateHistoricoRecebimento,
  owner,
};
