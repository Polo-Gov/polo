const contrato = require("../services/contrato");
const Contrato = new contrato.contrato();
//bodyparser

function criarContrato(req, res) {
  //create contrato
  const {
    imovelId,
    duracao,
    tipo,
    enderecoBlockchain,
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
    enderecoBlockchain,
    ultimaFiscalizacao,
    proximaFiscalizacao,
    cobrancaArrecadacao,
    ultimaCobranca,
    status
  )
    .then((contrato) => {
      res.status(200).send("contrato criado com sucesso");
    })
    .catch((err) => {
      res.status(400).send({ error: err.message });
    });
}

async function alterarContrato(req, res) {
  //update contrato

  const {
    id,
    imovelId,
    duracao,
    tipo,
    enderecoBlockchain,
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
    enderecoBlockchain,
    ultimaFiscalizacao,
    proximaFiscalizacao,
    cobrancaArrecadacao,
    ultimaCobranca,
    status
  )
    .then((contrato) => {
      res.status(200).send("contrato alterado com sucesso");
    })
    .catch((err) => {
      res.status(400).send({ error: err.message });
    });
}

function acharContrato(req, res) {
  //find contrato
  const { id } = req.body;
  Contrato.acharContrato(id)
    .then((contrato) => {
      res.status(200).send(contrato);
    })
    .catch((err) => {
      res.status(400).send({ error: err.message });
    });
}

function acharPorImovelId(req, res) {
  //find contrato
  const { imovelId } = req.body;
  Contrato.acharImovelId(imovelId)
    .then((contrato) => {
      res.status(200).send(contrato);
    })
    .catch((err) => {
      res.status(400).send({ error: imovelId });
    });
}

function acharPorStatus(req, res) {
  //find contrato
  const { status } = req.body.status;
  Contrato.acharPorStatus(status)
    .then((contrato) => {
      res.status(200).send(contrato);
    })
    .catch((err) => {
      res.status(400).send({ error: err.message });
    });
}

module.exports = {
  criarContrato,
  alterarContrato,
  acharContrato,
  acharPorImovelId,
  acharPorStatus,
};
