const express = require("express")
const router = express.Router()
const userController = require("../controllers/userController")
const bookController = require("../controllers/bookController")
const MW = require("../middleware/auth.js")





router.post('/register', userController.createUser)

router.post("/books", MW.midllauth, bookController.createBook)

router.post("/login",  userController.userLogin)

router.get("/books", bookController.getBooks)








router.all("/**", function (req, res) {
    res.status(404).send({
        status: false,
        msg: "The api you requested is not available"
    })
})





module.exports = router;