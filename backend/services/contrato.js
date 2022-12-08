const db = require("../models/index");
const Contrato = db.Contrato;

class contrato {
  async criarContrato(
    imovelId,
    duracao,
    tipo,
    encargos,
    ultimaFiscalizacao,
    proximaFiscalizacao,
    cobrancaArrecadacao,
    ultimaCobranca,
    status
  ) {
    await Contrato.create({
      imovelId: imovelId,
      duracao: duracao,
      tipo: tipo,
      encargos: encargos,
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
    encargos,
    ultimaFiscalizacao,
    proximaFiscalizacao,
    cobrancaArrecadacao,
    ultimaCobranca,
    status
  ) {
    await Contrato.update(
      {
        imovelId: imovelId,
        duracao: duracao,
        tipo: tipo,
        encargos: encargos,
        ultimaFiscalizacao: ultimaFiscalizacao,
        proximaFiscalizacao: proximaFiscalizacao,
        cobrancaArrecadacao: cobrancaArrecadacao,
        ultimaCobranca: ultimaCobranca,
        status: status,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
  }

    async acharContrato(id) {
        return await Contrato.findByPk(id);
    }
    acharImovelId(id) {
        return Contrato.findAll({ where: { imovelId: id } });
    }
    acharPorStatus(status) {
        return Contrato.findAll({ where: { status: status } });
    }
}
module.exports = { contrato };
