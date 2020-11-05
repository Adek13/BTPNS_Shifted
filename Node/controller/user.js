const userModel = require("../models/user")
const jwt       = require("jsonwebtoken")
const app       = require('../app')
require("dotenv/config")

exports.getUser = async (req, res) => {
    try {
        userModel.getUserAll((error, data) => {
            if(error) return res.status(500).send({
                error: "Internal Server Error!"
            })
            if(data.length){
                return res.status(200).send({
                    code: 200,
                    message: "Success!",
                    data: data
                })
                // console.log(data)
            }
            return res.status(401).send({
                error: "Invalid Request!!"
            })
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            error: "Internal Server Error!"
        })
    }
}

exports.getById = async (req, res) => {
    try {
        userModel.getById(req.params.id, (error, data) => {
            try {
                if(error) return res.status(500).send({
                    error: "Internal Server Error!"
                })
                if(data.length){
                    return res.status(200).send({
                        code: 200,
                        message: "Success!",
                        data: data[0]
                    })
                    // console.log(data)
                }
                console.log(data);
                return res.status(500).send({
                    error: "Invalid Request!!"
                })
            } catch (error) {
                console.log(error);
            }
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            error: "Internal Server Error!"
        })
    }
}

exports.insertUser = async (req, res) => {
    try {
        userModel.insertUser(req.body, (error, data) => {
            if(error){ 
                return res.status(500).send({
                    error: "Internal Server Error!"
                })
            }else{
                return res.status(200).send({
                    code: 200,
                    message: "Added!",
                })
            }
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            error: "Internal Server Error!"
        })
    }
}

exports.updateUser = async (dataLogin, req, res) => {
    const {id_user, status} = dataLogin
    if(status == "admin" || id_user == req.params.id){
        try {
            const data = {...req.body, id_user: req.params.id}
            userModel.updateUser(data, (error, data) => {
                if(error){ 
                    return res.status(500).send({
                        error: "Internal Server Error!"
                    })
                }else{
                    return res.status(200).send({
                        code: 200,
                        message: "Updated!",
                    })
                }
            })
        } catch (error) {
            console.log(error);
            return res.status(500).send({
                error: "Internal Server Error!"
            })
        }
    }else{
        return res.status(401).send({
            error: "You Dont Have Access To Do This Action!"
        })  
    }
}

exports.deleteUser = async (dataLogin, req, res) => {
    const {id_user, status} = dataLogin
    if(status == "admin"){
        try {
            userModel.deleteUser(req.params.id, (error, data) => {
                if(error){ 
                    return res.status(500).send({
                        error: "Internal Server Error!"
                    })
                }else{
                    return res.status(200).send({
                        code: 200,
                        message: "Deleted!",
                    })
                }
            })
        } catch (error) {
            console.log(error);
            return res.status(500).send({
                error: "Internal Server Error!"
            })
        }
    }else{
        return res.status(401).send({
            error: "You Dont Have Access To Do This Action!"
        })  
    }
}