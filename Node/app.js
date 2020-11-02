const express = require("express")
const app = express()
const mongoose = require("mongoose")
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
app.get("/userlist", (req, res) => {
    res.send(userList)
})

// Import Routes
const userRoute = require("./routes/users")
const indexRoute = require("./routes/index")


app.use("/user", userRoute)
app.use("/", indexRoute)


//Connect to db
mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true }, () => console.log("DB Connected"))

// app.get("/gin/:userId", (req, res) => {
//     let hasilFilter = userList.filter(user => user.id === req.params.userId)
//     if(hasilFilter.length){
//         res.send(true)
//     }else{
//         res.send(false)
//     }
// })

// app.get("/", (req, res) => {
//     res.send("index")
// })
// // POST /login gets urlencoded bodies
// app.post("/login", (req, res) => {
//     console.log("req: ", req.body);
//     res.send(req.body)
// })

// // POST /register gets JSON bodies
// app.post("/register", (req, res) => {
//     userList.push(req.body)
//     res.send({
//         "status" : true
//     })
// })

module.exports = app


/**
 * Latihan:
 *  - Login
 *  - Register/Tambah User
 *  - User List
 *  - Edit User
 *  - Delete User
 */