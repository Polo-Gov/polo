//router contratos
const express = require("express");
const router = express.Router();
const contratoController = require("../controllers/contrato.js");

router.post("/criar", contratoController.criarContrato);
router.put("/alterar/:id", contratoController.alterarContrato);
router.get("/achar/:id", contratoController.acharContrato);
router.get(
  "/acharPorImovelId/:imovelId",

  contratoController.acharPorImovelId
);
router.get("/acharPorStatus/:status", contratoController.acharPorStatus);

module.exports = router;
