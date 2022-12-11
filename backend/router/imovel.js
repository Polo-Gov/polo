const express = require("express");
const imovelController = require("../controllers/imovel");
const router = express.Router();

router.post("/criar", imovelController.criarImovel); //Checado
router.post("/alterar", imovelController.alterarImovel); // Checado
router.post("/achar", imovelController.acharImovel); // Checado
router.delete("/deletar", imovelController.deletarImovel); // Checado
router.post("/criarContratoBlock", imovelController.criarContratoImovel); // Checado
router.post("/addOwner", imovelController.addOwnerUnion); // Checado

router.get("/getOwner", imovelController.getOwner); // Checado

router.delete("/removeOwner", imovelController.removeOwnerUnion); // Checado
router.post("/addDono", imovelController.addDono); // Checado
router.post("/removeDono", imovelController.removeDono); // Checado

router.put("/updateAcoes", imovelController.updateAcoes); //Checado
router.put("/updatePrazo", imovelController.updatePrazo); // Checado
router.put("/updateStatus", imovelController.updateStatus); // Checado
router.put("/updateCondicoes", imovelController.updateCondicoes); // Checado ; falta saber quantas condicoes eu tenho
router.put("/updateValorCobranca", imovelController.updateValorCobranca); //Checado
router.put("/updateDataProxCobranca", imovelController.updateDataProxCobranca); //Checado
router.put(
  "/updateHistoricoRecebimento",
  imovelController.updateHistoricoRecebimento
); // Checado ; falta saber quantos historicos eu tenho

module.exports = router;
