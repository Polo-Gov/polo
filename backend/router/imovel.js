const express = require("express");
const imovelController = require("../controllers/imovel");
const router = express.Router();

router.post("/criar", imovelController.criarImovel);
router.post("/alterar", imovelController.alterarImovel);
router.post("/achar", imovelController.acharImovel);
router.delete("/deletar", imovelController.deletarImovel);

module.exports = router;
