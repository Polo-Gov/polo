const imovel = require("../services/imovel");
const Imovel = new imovel.imovel();

// //bodyparser

const criarImovel = (req, res) => {
  //create imovel
  const { cep, logradouro, numero, bairro, cidade, estado, status, ipfsImage } =
    req.body;
  Imovel.criarImovel(
    cep,
    logradouro,
    numero,
    bairro,
    cidade,
    estado,
    status,
    ipfsImage
  )
    .then((imovel) => {
      res.status(200).send("imovel criado com sucesso");
    })
    .catch((err) => {
      res.status(400).send({ error: err.message });
    });
};

const criarContratoImovel = (req, res) => {
  const {
    idImovel,
    prazos,
    donos,
    status,
    condicoes,
    valorCobranca,
    dataProximaCobranca,
    dataRecebimento,
    valoresRecebimento,
  } = req.body;
  Imovel.criarContratoImovel(
    idImovel,
    prazos,
    donos,
    status,
    condicoes,
    valorCobranca,
    dataProximaCobranca,
    dataRecebimento,
    valoresRecebimento
  ).then((imovel) => {
    res
      .status(200)
      .send({ message: "Imovel criado com sucesso", address: imovel });
  });
};

async function alterarImovel(req, res) {
  //update imovel

  const {
    id,
    cep,
    logradouro,
    numero,
    bairro,
    cidade,
    estado,
    status,
    enderecoBlockchain,
    imagem,
  } = req.body;
  Imovel.alterarImovel(
    id,
    cep,
    logradouro,
    numero,
    bairro,
    cidade,
    estado,
    status,
    enderecoBlockchain,
    imagem
  )
    .then((response) => {
      res.status(200).send({
        message: "Imovel alterado com sucesso",
        transaction: response,
      });
    })
    .catch((err) => {
      res.status(400).send({ error: err.message });
    });
}

async function acharImovel(req, res) {
  //get imovel
  const { cidade, estado, status } = req.body;
  Imovel.acharImovel(cidade, estado, status)
    .then((imovel) => {
      res.status(200).send(imovel);
    })
    .catch((err) => {
      res.status(400).send({ error: err.message });
    });
}
async function acharId(req, res) {
  const { id } = req.body;
  Imovel.acharId(id)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((err) => {
      res.status(400).send({ error: err.message });
    });
}
async function deletarImovel(req, res) {
  const { id } = req.body;
  Imovel.deletarImovel(id)
    .then((response) => {
      res.status(200).send({
        message: "Imovel deletado com sucesso",
        transaction: response,
      });
    })
    .catch((err) => {
      res.status(400).send({ error: err.message });
    });
}

async function addOwnerUnion(req, res) {
  const { id, ownerAddress } = req.body;
  await Imovel.addOwnwer(id, ownerAddress)
    .then((response) => {
      res
        .status(200)
        .send({ message: "Owner criado com sucesso", transaction: response });
    })
    .catch((err) => {
      res.status(400).send({ error: err.message });
    });
}

async function getOwner(req, res) {
  await Imovel.getOwner()
    .then((owner) => {
      res.status(200).send(owner);
    })
    .catch((err) => {
      res.status(400).send({ error: err.message });
    });
}

async function removeOwnerUnion(req, res) {
  const { id, ownerAddress } = req.body;

  await Imovel.removeOwner(id, ownerAddress)
    .then((response) => {
      res
        .status(200)
        .send({ message: "Owner removido com sucesso", transaction: response });
    })
    .catch((err) => {
      res.status(400).send({ error: err.message });
    });
}

async function addDono(req, res) {
  const {
    id,
    donoAddress,
    prazo,
    status,
    condicoes,
    valorCobranca,
    dataProxCobranca,
    datasRecebimento,
    valoresRecebimento,
  } = req.body;
  await Imovel.addDono(
    id,
    donoAddress,
    prazo,
    status,
    condicoes,
    valorCobranca,
    dataProxCobranca,
    datasRecebimento,
    valoresRecebimento
  )
    .then((response) => {
      res.status(200).send({
        message: "Novo dono criado com sucesso",
        transaction: response,
      });
    })
    .catch((err) => {
      res.status(400).send({ error: err.message });
    });
}

async function removeDono(req, res) {
  const { id, ownerAddress } = req.body;
  await Imovel.removeOwner(id, ownerAddress)
    .then((response) => {
      res
        .status(200)
        .send({ message: "Dono removido com sucesso", transaction: response });
    })
    .catch((err) => {
      res.status(400).send({ error: err.message });
    });
}

async function updateAcoes(req, res) {
  const { id, ownerAddress, acao } = req.body;
  await Imovel.updateAcoes(id, ownerAddress, acao)
    .then((response) => {
      res.status(200).send({
        message: "Ação registrada com sucesso",
        transaction: response,
      });
    })
    .catch((err) => {
      res.status(400).send({ error: err.message });
    });
}

async function updatePrazo(req, res) {
  const { id, ownerAddress, prazo } = req.body;
  await Imovel.updatePrazo(id, ownerAddress, prazo)
    .then((response) => {
      res
        .status(200)
        .send({ message: "Prazo atualizado", transaction: response });
    })
    .catch((err) => {
      res.status(400).send({ error: err.message });
    });
}

async function updateStatus(req, res) {
  const { id, ownerAddress, status } = req.body;
  await Imovel.updateStatus(id, ownerAddress, status)
    .then((response) => {
      res
        .status(200)
        .send({ message: "Status alterado", transaction: response });
    })
    .catch((err) => {
      res.status(400).send({ error: err.message });
    });
}

async function updateCondicoes(req, res) {
  const { id, ownerAddress, condicoes } = req.body;
  await Imovel.updateCondicoes(id, ownerAddress, condicoes)
    .then((response) => {
      res
        .status(200)
        .send({ message: "Condicoes adicionada", transaction: response });
    })
    .catch((err) => {
      res.status(400).send({ error: err.message });
    });
}

async function updateValorCobranca(req, res) {
  const { id, ownerAddress, cobranca } = req.body;
  await Imovel.updateValorCobranca(id, ownerAddress, cobranca)
    .then((response) => {
      res.status(200).send({
        message: "Valor de cobranca atualizado",
        transaction: response,
      });
    })
    .catch((err) => {
      res.status(400).send({ error: err.message });
    });
}

async function updateDataProxCobranca(req, res) {
  const { id, ownerAddress, data } = req.body;
  await Imovel.updateDataProxCobranca(id, ownerAddress, data)
    .then((response) => {
      res.status(200).send({
        message: "Data de cobranca atualizada",
        transaction: response,
      });
    })
    .catch((err) => {
      res.status(400).send({ error: err.message });
    });
}

async function updateHistoricoRecebimento(req, res) {
  const { id, ownerAddress, hist } = req.body;
  await Imovel.updateHistoricoRecebimento(id, ownerAddress, hist)
    .then((response) => {
      res.status(200).send({
        message: "Historico atualizado",
        transaction: response,
      });
    })
    .catch((err) => {
      res.status(400).send({ error: err.message });
    });
}

module.exports = {
  criarImovel,
  alterarImovel,
  acharImovel,
  deletarImovel,
  criarContratoImovel,
  addOwnerUnion,
  removeOwnerUnion,
  addDono,
  removeDono,
  updateAcoes,
  updatePrazo,
  updateStatus,
  updateCondicoes,
  updateValorCobranca,
  updateDataProxCobranca,
  updateHistoricoRecebimento,
  getOwner,
  acharId,
};
