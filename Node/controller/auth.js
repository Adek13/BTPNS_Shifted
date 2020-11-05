const userModel     = require("../models/user")
const jwt           = require("jsonwebtoken")
const app           = require('../app')
require("dotenv/config")

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body
        userModel.getUser(username, password, (error, data) => {
            if(error) return res.status(500).send({
                error: "Internal Server Error!"
            })
            if(data.length){
                const dataLogin = {
                    id_user: data[0].id_user,
                    status: data[0].nama_role
                }
                const key = process.env.JWT_KEY
                const token = jwt.sign(dataLogin, key, { expiresIn: '1h' })
                return res.status(200).send({
                    code: 200,
                    message: "User Found!",
                    data: {
                            role: data[0].nama_role,
                            token
                        }
                })
            }
            return res.status(401).send({
                error: "Invalid Username or Password!!"
            })
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            error: "Internal Server Error!"
        })
    }
}

exports.register = async (req, res) => {
    try {
        userModel.register(req.body, (error, data) => {
            try {
                if(error) return res.status(500).send({
                    error: "Internal Server Error!"
                })
                return res.status(200).send({
                    code: 200,
                    message: "Register Success!",
                })
                
            } catch (error) {
                console.log("Query Failure :", error)
                res.status(500).send({
                    error: "Internal Server Error!"
                })
            }
            return res.status(401).send({
                error: "Invalid Username or Password!!"
            })
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            error: "Internal Server Error!"
        })
    }
}