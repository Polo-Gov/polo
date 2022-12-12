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
  const address = await axios
    .get("http://localhost:3001/imovel/achar", { id: id })
    .then((result) => {
      return result.enderecoBlockchain;
    });
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const contract = new ethers.Contract(address, imovelJSON.abi, provider);
  return contract;
};
