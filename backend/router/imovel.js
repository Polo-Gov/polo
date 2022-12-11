const express = require("express");
const imovelController = require("../controllers/imovel");
const router = express.Router();

router.post("/criar", imovelController.criarImovel); //Checado
router.post("/alterar", imovelController.alterarImovel); // Checado
router.post("/achar", imovelController.acharImovel); // Checado
router.delete("/deletar", imovelController.deletarImovel); // Checado
router.post("/enderecoBlock", imovelController.criarContratoImovel); // Checado
router.post("/addOwner", imovelController.addOwnerUnion); // Checado

router.get("/getOwner", imovelController.getOwner); // Checado

router.delete("/removeOwner", imovelController.removeOwnerUnion);
router.post("/addDono", imovelController.addDono);
router.post("/removeDono", imovelController.addDono);
router.put("/updateAcoes", imovelController.updateAcoes);
router.put("/updatePrazo", imovelController.updatePrazo);
router.put("/updateStatus", imovelController.updateStatus);
router.put("/updateCondicoes", imovelController.updateCondicoes);
router.put("/updateValorCobranca", imovelController.updateValorCobranca);
router.put("/updateDataProxCobranca", imovelController.updateDataProxCobranca);
router.put(
  "/updateHistoricoRecebimento",
  imovelController.updateHistoricoRecebimento
);

module.exports = router;
