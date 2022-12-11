const db = require("../models/index");
const uploadJSONIPFS = require("../utils/ipfs");
const factoryInstance = require("../controllers/factory");
const dotenv = require("dotenv").config();
const { factoryCreateImovel } = require("../utils/imoveisFunctions");
const ImovelFunction = require("../utils/contractsFunctions");

class imovel {
  constructor() {
    this.imovel = db.imoveis;
  }

  async criarImovel(
    cep,
    logradouro,
    numero,
    bairro,
    cidade,
    estado,
    status,
    ipfsImage
  ) {
    try {
      const Imovel = await this.imovel;
      const imovel = await Imovel.create({
        cep: cep,
        logradouro: logradouro,
        numero: numero,
        bairro: bairro,
        cidade: cidade,
        estado: estado,
        status: status,
        enderecoBlockchain: "",
        linkImagem: ipfsImage,
      });
      return imovel;
    } catch (err) {
      throw err;
    }
  }

  async alterarImovel(
    id,
    cep,
    logradouro,
    numero,
    bairro,
    cidade,
    estado,
    status,
    enderecoBlockchain,
    linkImagem
  ) {
    try {
      let args = {};
      if (cep) args.cep = cep;
      if (logradouro) args.logradouro = logradouro;
      if (numero) args.numero = numero;
      if (bairro) args.bairro = bairro;
      if (cidade) args.cidade = cidade;
      if (estado) args.estado = estado;
      if (status) args.status = status;
      if (enderecoBlockchain) args.enderecoBlockchain = enderecoBlockchain;
      if (linkImagem) args.linkImagem = linkImagem;
      const Imovel = await this.imovel;
      const imovel = await Imovel.update(args, {
        where: {
          id: id,
        },
      });
      return imovel;
    } catch (err) {
      throw new Error("erro ao alterar imovel");
    }
  }

  async acharImovel(cidade, estado, estatus) {
    let args = {};
    if (cidade) args.cidade = cidade;
    if (estado) args.estado = estado;
    if (estatus) args.status = estatus;
    try {
      const Imovel = await this.imovel;
      const imovel = await Imovel.findAll({
        where: args,
      });
      return imovel;
    } catch (err) {
      throw new Error("erro ao achar imovel");
    }
  }
  async deletarImovel(id) {
    try {
      const Imovel = await this.imovel;
      const imovel = await Imovel.destroy({
        where: {
          id: id,
        },
      });
    } catch (error) {
      throw new Error("erro ao deletar imovel");
    }
  }

  async criarContratoImovel(
    idImovel,
    prazos,
    donos,
    status,
    condicoes,
    valorCobranca,
    dataProximaCobranca,
    dataRecebimento,
    valoresRecebimento
  ) {
    try {
      let newCondicao = [];
      for (let i = 0; i < condicoes.length; i++) {
        await uploadJSONIPFS({ condicao: condicoes[i] }).then((res) => {
          newCondicao.push(res);
        });
      }
      const address = await factoryCreateImovel(
        idImovel,
        prazos,
        donos,
        status,
        newCondicao,
        valorCobranca,
        dataProximaCobranca,
        dataRecebimento,
        valoresRecebimento
      );
      this.alterarImovel(
        idImovel,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        address,
        null
      );
      return "Contrato criado com sucesso";
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async addOwnwer(idImovel, ownerAddress) {

    let response = ""

    await ImovelFunction.addOwnerUnion(idImovel, ownerAddress).then((res) => {
      response = res
    });

    return response
  }

  async getOwner(){

    let response = ""

    await ImovelFunction.owner(1).then((res) => {
      response = res
    });

    return response
  }

  async removeOwner(idImovel, ownerAddress) {

    let response = ""

    await ImovelFunction.removeOwnerUnion(idImovel, ownerAddress).then((res) => {
      response = res
    });

    return response
  }

  async addDono(idImovel, ownerAddress, prazo, status, condicoes, valorCobranca, dataProxCobranca, datasRecebimento, valoresRecebimento) {

    let response = ""

    await ImovelFunction.addDono(idImovel, ownerAddress, prazo, status, condicoes, valorCobranca, dataProxCobranca, datasRecebimento, valoresRecebimento).then((res) => {
      response = res
    });

    return response
  }

  async removeDono(idImovel, ownerAddress) {

    let response = ""

    await ImovelFunction.removeDono(idImovel, ownerAddress).then((res) => {
      response = res
    });

    return response
  }

  async updateAcoes(idImovel, ownerAddress, acao) {

    let response = ""

    await ImovelFunction.updateAcoes(idImovel, ownerAddress, acao).then((res) => {
      response = res
    });

    return response
  }
  
  async updatePrazo(idImovel, ownerAddress, prazo) {

    let response = ""

    await ImovelFunction.updatePrazo(idImovel, ownerAddress, prazo).then((res) => {
      response = res
    });

    return response
  }

  async updateStatus(idImovel, ownerAddress, status) {

    let response = ""

    await ImovelFunction.updateStatus(idImovel, ownerAddress, status).then((res) => {
      response = res
    });

    return response
  }

  async updateCondicoes(idImovel, ownerAddress, condicoes) {

    let response = ""

    await ImovelFunction.updateCondicoes(idImovel, ownerAddress, condicoes).then((res) => {
      response = res
    });

    return response
  }

  async updateValorCobranca(idImovel, ownerAddress, cobranca) {

    let response = ""

    await ImovelFunction.updateValorCobranca(idImovel, ownerAddress, cobranca).then((res) => {
      response = res
    });

    return response
  }

  async updateDataProxCobranca(idImovel, ownerAddress, data) {

    let response = ""

    await ImovelFunction.updateDataProxCobranca(idImovel, ownerAddress, data).then((res) => {
      response = res
    });

    return response
  }

  async updateHistoricoRecebimento(idImovel, ownerAddress, hist) {

    let response = ""

    await ImovelFunction.updateHistoricoRecebimento(idImovel, ownerAddress, hist).then((res) => {
      response = res
    });

    return response
  }
}



module.exports = { imovel };
