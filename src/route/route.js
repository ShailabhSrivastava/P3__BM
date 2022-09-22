const express = require('express');
const router = express.Router();
const userController = require("../controller/userController")
const bookController=require("../controller/bookController")
const middleWare=require("../middleWare/auth")





router.post('/register', userController.createUser)
router.post('/login',middleWare.authenticator, userController.userLogin)
router.post('/books',middleWare.authenticator,bookController.createBook)
router.get("/books",middleWare.authenticator,bookController.getBook)
router.get("/books/:bookId",middleWare.authenticator,bookController.getBookById)
router.put("/books/:bookId",middleWare.authenticator,middleWare.authorization,bookController.updateBook)
router.delete("books/:bookId",middleWare.authenticator,middleWare.authorization,bookController.deleteBooks)
module.exports = router;