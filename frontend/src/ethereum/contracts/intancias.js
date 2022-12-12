import { ethers } from "ethers";
import factotyJSON from "./Factory.json";
import imovelJSON from "./Imovel.json";
import axios from "axios";

export const factoryInstance = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const contract = new ethers.Contract(
    "0x751700fce14fcecab45372613177da1a27ec55a3",
    factotyJSON.abi,
    provider
  );
  return contract;
};

export const imovelInstance = async (id) => {
  const address = await axios({
    method: "put",
    url: "http://localhost:3001/imovel/achar",
    data: {
      id: id,
    },
  }).then((res) => {
    return res;
  });
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const contract = new ethers.Contract(
    address.data.enderecoBlockchain,
    imovelJSON.abi,
    provider
  );
  return contract;
};
