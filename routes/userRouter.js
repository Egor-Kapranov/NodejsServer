const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

const userController = require("../controllers/userController");

router.post("/registration", userController.addUser);
router.post("/auth", authMiddleware, userController.Auth);
router.get("/login", userController.Login);
module.exports = router;
