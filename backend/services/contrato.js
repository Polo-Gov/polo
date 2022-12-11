const db = require("../models/index");

class contrato {
  constructor() {
    this.db = db.contratos;
  }
  async criarContrato(
    imovelId,
    duracao,
    tipo,
    enderecoBlockchain,
    ultimaFiscalizacao,
    proximaFiscalizacao,
    cobrancaArrecadacao,
    ultimaCobranca,
    status
  ) {
    let Contrato = await this.db;
    await Contrato.create({
      imovelId: imovelId,
      duracao: duracao,
      tipo: tipo,
      enderecoBlockchain: enderecoBlockchain,
      ultimaFiscalizacao: ultimaFiscalizacao,
      proximaFiscalizacao: proximaFiscalizacao,
      cobrancaArrecadacao: cobrancaArrecadacao,
      ultimaCobranca: ultimaCobranca,
      status: status,
    });
  }

  async alterarContrato(
    id,
    imovelId,
    duracao,
    tipo,
    enderecoBlockchain,
    ultimaFiscalizacao,
    proximaFiscalizacao,
    cobrancaArrecadacao,
    ultimaCobranca,
    status
  ) {
    let Contrato = await this.db;
    await Contrato.update(
      {
        duracao: duracao,
        tipo: tipo,
        enderecoBlockchain: enderecoBlockchain,
        ultimaFiscalizacao: ultimaFiscalizacao,
        proximaFiscalizacao: proximaFiscalizacao,
        cobrancaArrecadacao: cobrancaArrecadacao,
        ultimaCobranca: ultimaCobranca,
        status: status,
      },
      {
        where: {
          id: id,
        },
      }
    );
  }

  async acharContrato(id) {
    let Contrato = await this.db;
    return await Contrato.findByPk(id);
  }
  async acharImovelId(id) {
    let Contrato = await this.db;
    return Contrato.findAll({}, { where: { imovelId: id } });
  }
  async acharPorStatus(status) {
    let Contrato = await this.db;
    return Contrato.findAll({}, { where: { status: status } });
  }
}
module.exports = { contrato };
