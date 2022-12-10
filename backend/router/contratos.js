//router contratos
const express = require("express");
const router = express.Router();
const contratoController = require("../controllers/contrato.js");

router.post("/criar", contratoController.criarContrato);
router.put("/alterar", contratoController.alterarContrato);
router.get("/achar", contratoController.acharContrato);
router.get("/acharPorImovelId", contratoController.acharPorImovelId);
router.get("/acharPorStatus/", contratoController.acharPorStatus);

module.exports = router;
