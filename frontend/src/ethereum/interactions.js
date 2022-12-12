import { ethers } from "ethers";
import { factoryInstance, imovelInstance } from "./contracts/intancias";

const getProvider = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  return provider;
};

export const getAllDonos = async () => {
  const imovelContract = await imovelInstance();
  const allDonos = await imovelContract.getAllDonos();
  return allDonos;
};

export const getDonoId = async (address) => {
  let donoId;
  const allDonos = await getAllDonos();
  for (let i = 0; i < allDonos.length; i++) {
    if (allDonos[i] === address) {
      donoId = i;
    }
  }
  return donoId;
};

export const getAcoesCount = async (address) => {
  const imovelContract = await imovelInstance();
  const donoId = await getDonoId(address);
  const count = await imovelContract.acoesCount(donoId);
  return count;
};

export const getCondicoes = async (address, number) => {
  const imovelContract = await imovelInstance();
  const donoId = await getDonoId(address);
  const condicoes = await imovelContract.condicoes(donoId, number);
  return condicoes;
};

export const getDataProxCobranca = async (address) => {
  const imovelContract = await imovelInstance();
  const donoId = await getDonoId(address);
  const data = await imovelContract.getDataProxCobranca(donoId);
  return data;
};

export const getOneDono = async (id) => {
  const imovelContract = await imovelInstance();
  const address = await imovelContract.donos(id);
  return address;
};

export const getValorCobranca = async (address) => {
  const imovelContract = await imovelContract();
  const donoId = await getDonoId(address);
  const valor = await imovelContract.valorCobranca(donoId);
  return valor;
};

export const getStatus = async (address) => {
  const imovelContract = await imovelContract();
  const donoId = await getDonoId(address);
  const status = await imovelContract.status(donoId);
  return status;
};

export const getPrazo = async (address) => {
  const imovelContract = await imovelContract();
  const donoId = await getDonoId(address);
  const prazo = await imovelContract.prazo(donoId);
  return prazo;
};

export const getHistoricoRecebimento = async (address, idHist) => {
  const imovelContract = await imovelContract();
  const donoId = await getDonoId(address);
  const hist = await getHistoricoRecebimento(address, idHist);
  // hist = {data: unixtime, valor: unixtime}
  hist.data = new Date(hist.data * 1000);

  return hist;
};

export const getIdPredio = async () => {
  const imovelContract = await imovelContract();
  const idPredio = await imovelContract.idPredio();
  return idPredio;
};

export const getIdAcoes = async (address, number) => {
  const imovelContract = await imovelContract();
  const donoId = await getDonoId(address);
  const acao = await imovelContract.getIdAcoes(donoId, number);
  const response = await fetch(acao).then((res) => {
    return res;
  });

  return response;
};
