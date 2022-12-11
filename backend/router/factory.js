const storageController = require("../controllers/factory");
const express = require("express");
const router = express.Router();

router.get("/owner", storageController.factoryOwner);
router.get("/addUnion", storageController.factoryaddUnion);
router.get("/removeUnion", storageController.factoryRemoveUnion);
router.get("/createImovel", storageController.factoryCreateImovel);


module.exports = router;
