const contrato = require("../services/contrato");
const Contrato = new contrato.contrato();
//bodyparser

function criarContrato(req, res) {
  //create contrato
  const {
    imovelId,
    duracao,
    tipo,
    encargos,
    ultimaFiscalizacao,
    proximaFiscalizacao,
    cobrancaArrecadacao,
    ultimaCobranca,
    status,
  } = req.body;
  Contrato.criarContrato(
    imovelId,
    duracao,
    tipo,
    encargos,
    ultimaFiscalizacao,
    proximaFiscalizacao,
    cobrancaArrecadacao,
    ultimaCobranca,
    status
  ).then((contrato) => {
    res.send("contrato criado com sucesso");
  });
}

async function alterarContrato(req, res) {
  //update contrato
  const { id } = req.params.id;
  const {
    imovelId,
    duracao,
    tipo,
    encargos,
    ultimaFiscalizacao,
    proximaFiscalizacao,
    cobrancaArrecadacao,
    ultimaCobranca,
    status,
  } = req.body;
  Contrato.alterarContrato(
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
  ).then((contrato) => {
    res.send("contrato alterado com sucesso");
  });
}

function acharContrato(req, res) {
  //find contrato
  const { id } = req.params.id;
  Contrato.acharContrato(id).then((contrato) => {
    res.send(contrato);
  });
}

function acharPorImovelId(req, res) {
  //find contrato
  const { imovelId } = req.params.imovelId;
  Contrato.acharImovelId(imovelId).then((contrato) => {
    res.send(contrato);
  });
}

function acharPorStatus(req, res) {
  //find contrato
  const { status } = req.params.status;
  Contrato.acharPorStatus(status).then((contrato) => {
    res.send(contrato);
  });
}

module.exports = {
  criarContrato,
  alterarContrato,
  acharContrato,
  acharPorImovelId,
  acharPorStatus,
};
