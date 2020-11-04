const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const cors = require("cors")
require('dotenv/config')

// create application/json parser
// const jsonParser = bodyParser.json()
app.use(bodyParser.json())

// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }))

// serve static files
app.use(express.static("public"))

// set up cors
app.use(cors())

// Import Routes
const indexRoute = require("./routes/index")
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")


//apply route
app.use("/", indexRoute)
app.use("/auth", authRoute)
app.use("/user", userRoute)

const response = (res, code, message, data) => {
    res.status(code).send({
        code,
        message,
        data
    })
}
module.exports = app
