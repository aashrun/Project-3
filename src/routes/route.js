const express = require("express")
const router = express.Router()
const userController = require("../controllers/userController")
const bookController = require("../controllers/bookController")
const MW = require("../middleware/auth.js")
const rc= require("../controllers/reviewController")





router.post('/register', userController.createUser)

router.post("/books", MW.authenticate, bookController.createBook)

router.post("/login",  userController.userLogin)

router.get("/books", MW.authenticate, bookController.getBooks)

router.get("/books/:bookId",  bookController.getBooksById)

router.put("/books/:bookId", MW.authorize, bookController.updateBooks)

router.delete("/books/:bookId", MW.authorize, bookController.deleteBooks)
router.post("/books/:bookId/review", rc.createReview )








router.all("/**", function (req, res) {
    res.status(404).send({
        status: false,
        msg: "The api you requested is not available!"
    })
})





module.exports = router;