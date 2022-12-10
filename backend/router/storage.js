const storageController = require("../controllers/storage");
const express = require("express");
const router = express.Router();

router.get("/getStorage", storageController.getStorage);

module.exports = router;
