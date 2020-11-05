var express     = require('express')
var router      = express.Router()
const departmentController = require("../controller/department")

router.get("/", (req, res) => {
    return departmentController.getDepartment(req, res)
})

module.exports = router
