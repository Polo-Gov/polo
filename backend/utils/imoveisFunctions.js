const dotenv = require("dotenv").config();
const { CeloProvider } = require("@celo-tools/celo-ethers-wrapper");
const { Contract, ethers, utils, providers } = require("ethers");

const storage = require("../../blockchain/artifacts/contracts/factory.sol/Factory.json");
const { address } = require("../contractsAddress.json");

// Connecting to Alfajores testnet

const { CeloWallet } = require("@celo-tools/celo-ethers-wrapper");

// const factoryOwner = (req, res) => {
//   const provider = new CeloProvider("https://alfajores-forno.celo-testnet.org");
//   await provider.ready;
//   const { owner } = req.body;

//   const wallet = new CeloWallet(dotenv.parsed.PRIVATE_KEY, provider);
//   try {
//     const contrato = new ethers.Contract(
//       address[0].factory,
//       storage.abi,
//       wallet
//     );
//     const response = await contrato.owner(owner);

//     return res.status(200).send(response);
//   } catch (error) {
//     return res.status(400).send({ error: error.message });
//   }
// }

// async function factoryaddUnion(req, res) {
//   const provider = new CeloProvider("https://alfajores-forno.celo-testnet.org");
//   await provider.ready;
//   const { union } = req.body;

//   const wallet = new CeloWallet(dotenv.parsed.PRIVATE_KEY, provider);
//   try {
//     const contrato = new ethers.Contract(
//       address[0].factory,
//       storage.abi,
//       wallet
//     );
//     const response = await contrato.addUnion(union);

//     return res.status(200).send("Union adicionada com sucesso");
//   } catch (error) {
//     return res.status(400).send({ error: error.message });
//   }
// }

// async function factoryRemoveUnion(req, res) {
//   const provider = new CeloProvider("https://alfajores-forno.celo-testnet.org");
//   await provider.ready;
//   const { union } = req.body;

//   const wallet = new CeloWallet(dotenv.parsed.PRIVATE_KEY, provider);
//   try {
//     const contrato = new ethers.Contract(
//       address[0].factory,
//       storage.abi,
//       wallet
//     );
//     const response = await contrato.removeUnion(union);

//     return res.status(200).send("Union removida com sucesso");
//   } catch (error) {
//     return res.status(400).send({ error: error.message });
//   }
// }

const factoryCreateImovel = async (
  idPredio,
  prazo,
  donos,
  status,
  condicoes,
  valorCobranca,
  dataProxCobranca,
  datasRecebimento,
  valoresRecebimento
) => {
  const provider = new CeloProvider("https://alfajores-forno.celo-testnet.org");
  await provider.ready;

  const wallet = new CeloWallet(dotenv.parsed.PRIVATE_KEY, provider);
  try {
    const contrato = new ethers.Contract(
      address[0].factory,
      storage.abi,
      wallet
    );

    let res = "Esperando";

    contrato.on("NewImovel", (imovel) => {
      console.log("Imovel: ", imovel);
      res = imovel;
    });

    const response = await contrato.createImovel(
      idPredio,
      prazo,
      donos,
      status,
      condicoes,
      valorCobranca,
      dataProxCobranca,
      datasRecebimento,
      valoresRecebimento
    );

    while (res === "Esperando") {
      await response.wait();
    }
    return res;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  factoryCreateImovel,
};
