const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController")
const booksController = require("../controllers/booksController")
const { authenticate, Authorisation } = require("../middleware/auth")
const reviewController = require("../controllers/reviewController")


router.post("/register", userController.createUser)

router.post("/login", userController.loginUser)


module.exports = router;