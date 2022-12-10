const db = require("../models/index");

class imovel {
  constructor() {
    this.imovel = db.imoveis;
  }

  async criarImovel(cep, logradouro, numero, bairro, cidade, estado, status) {
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
    status
  ) {
    try {
      let args = {};
      args.id = id;
      if (cep) args.cep = cep;
      if (logradouro) args.logradouro = logradouro;
      if (numero) args.numero = numero;
      if (bairro) args.bairro = bairro;
      if (cidade) args.cidade = cidade;
      if (estado) args.estado = estado;
      if (status) args.status = status;
      const Imovel = await this.imovel;
      const imovel = await Imovel.update(
        {
          cep: cep,
          logradouro: logradouro,
          numero: numero,
          bairro: bairro,
          cidade: cidade,
          estado: estado,
          status: status,
        },
        {
          where: {
            id: id,
          },
        }
      );
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
}

module.exports = { imovel };
