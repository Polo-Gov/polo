//user router
const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
const auth = require("../middleware/auth");

router.post("/criar", userController.createUser);
router.post("/login", userController.authenticateUser);
router.get("/verify", auth.unsureAuthenticated);

module.exports = router;
