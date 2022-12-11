const db = require("../models/index");
const uploadJSONIPFS = require("../utils/ipfs");
const factoryInstance = require("../controllers/factory");
const dotenv = require("dotenv").config();
const { factoryCreateImovel } = require("../utils/imoveisFunctions");
const { addOwnerUnion } = require("../utils/contractsFunctions");

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

    await addOwnerUnion(idImovel, ownerAddress).then((res) => {
      response = res
    });

    return response
  }
}

module.exports = { imovel };
