const storageController = require("../controllers/factory");
const express = require("express");
const router = express.Router();

router.get("/owner", storageController.factoryOwner); // Checado
router.get("/addUnion", storageController.factoryaddUnion); // Checado
router.get("/removeUnion", storageController.factoryRemoveUnion); // Checado
router.get("/createImovel", storageController.factoryCreateImovel); //Checado


module.exports = router;
