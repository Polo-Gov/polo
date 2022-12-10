const imovel = require("../services/imovel");
const Imovel = new imovel.imovel();

// //bodyparser

function criarImovel(req, res) {
  //create imovel
  const { cep, logradouro, numero, bairro, cidade, estado, status } = req.body;
  Imovel.criarImovel(cep, logradouro, numero, bairro, cidade, estado, status)
    .then((imovel) => {
      res.status(200).send("imovel criado com sucesso");
    })
    .catch((err) => {
      res.status(400).send({ error: err.message });
    });
}

async function alterarImovel(req, res) {
  //update imovel

  const { id, cep, logradouro, numero, bairro, cidade, estado, status } =
    req.body;
  Imovel.alterarImovel(
    id,
    cep,
    logradouro,
    numero,
    bairro,
    cidade,
    estado,
    status
  )
    .then((imovel) => {
      res.status(200).send("imovel alterado com sucesso");
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
async function deletarImovel(req, res) {
  const { id } = req.body;
  Imovel.deletarImovel(id)
    .then((imovel) => {
      res.status(200).send("imovel deletado com sucesso");
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
};