var express     = require('express')
var router      = express.Router()
const authController = require("../controller/auth")

router.post("/login", (req, res) => {
    return authController.login(req, res)
})

router.post("/register", (req, res) => {
    return authController.register(req, res)
})

module.exports = router
