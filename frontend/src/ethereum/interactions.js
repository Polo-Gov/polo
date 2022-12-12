import { BigNumber, ethers, utils } from "ethers";
import { factoryInstance, imovelInstance } from "./contracts/intancias";

const getProvider = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  return provider;
};

export const getAllDonos = async (idImovel) => {
  const imovelContract = await imovelInstance(idImovel);
  const allDonos = await imovelContract.getAllDonos();
  return allDonos;
};

export const getDonoId = async (idImovel, address) => {
  let donoId;
  const allDonos = await getAllDonos(idImovel);
  for (let i = 0; i < allDonos.length; i++) {
    if (allDonos[i] === address) {
      donoId = i;
    }
  }
  return donoId;
};

export const getAcoesCount = async (idImovel, address) => {
  const imovelContract = await imovelInstance(idImovel);
  const donoId = await getDonoId(idImovel, address);
  const count = BigNumber.from(
    await imovelContract.acoesCount(donoId)
  ).toNumber();
  return count;
};

export const getCondicoes = async (idImovel, address, number) => {
  const imovelContract = await imovelInstance(idImovel);
  const donoId = await getDonoId(idImovel, address);
  const condicoes = await imovelContract.condicoes(donoId, number);
  return condicoes;
};

export const getDataProxCobranca = async (idImovel, address) => {
  const imovelContract = await imovelInstance(idImovel);
  const donoId = await getDonoId(idImovel, address);
  const data = BigNumber.from(
    await imovelContract.dataProxCobranca(donoId)
  ).toNumber();
  return data;
};

export const getOneDono = async (idImovel, id) => {
  const imovelContract = await imovelInstance(idImovel);
  const address = await imovelContract.donos(id);
  return address;
};

export const getValorCobranca = async (idImovel, address) => {
  const imovelContract = await imovelInstance(idImovel);
  const donoId = await getDonoId(idImovel, address);
  const valor = BigNumber.from(
    await imovelContract.valorCobranca(donoId)
  ).toNumber();
  return valor;
};

export const getStatus = async (idImovel, address) => {
  const imovelContract = await imovelInstance(idImovel);
  const donoId = await getDonoId(idImovel, address);
  const status = await imovelContract.status(donoId);
  return status;
};

export const getPrazo = async (idImovel, address) => {
  const imovelContract = await imovelInstance(idImovel);
  const donoId = await getDonoId(idImovel, address);
  console.log("teste do donoId", donoId);
  const prazo = BigNumber.from(await imovelContract.prazo(donoId)).toNumber();
  return prazo;
};

export const getHistoricoRecebimento = async (idImovel, address, idHist) => {
  const imovelContract = await imovelInstance(idImovel);
  const donoId = await getDonoId(idImovel, address);
  const { data, valor } = await imovelContract.historicoRecebimento(
    donoId,
    idHist
  );
  const hist = {
    data: BigNumber.from(data).toNumber(),
    valor: BigNumber.from(valor).toNumber(),
  };
  // hist = {data: unixtime, valor: unixtime}

  return hist;
};

export const getIdPredio = async (idImovel) => {
  const imovelContract = await imovelInstance(idImovel);
  const idPredio = BigNumber.from(await imovelContract.idPredio()).toNumber();
  return idPredio;
};

export const getIdAcoes = async (idImovel, address, number) => {
  const imovelContract = await imovelInstance(idImovel);
  const donoId = await getDonoId(idImovel, address);
  const acao = await imovelContract.getIdAcoes(donoId, number);
  const response = await fetch(acao).then((res) => {
    return res;
  });

  return response;
};
