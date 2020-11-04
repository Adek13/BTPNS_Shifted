const User      = require("../models/user")
const jwt       = require("jsonwebtoken")
const { response } = require('../app')
require("dotenv/config")

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body
        let [filtered] = await User.filter(data => data.username === username && data.password === password)
        if(filtered){
            const dataLogin = {
                id: filtered.id,
                username: filtered.username,
                status: filtered.status
            }
            const token = jwt.sign(dataLogin, key, { expiresIn: '1h' })
            return response(res, 200, "User Exist!", {
                status: filtered.status,
                token
            })
        }else{
            return response(res, 401, "User does not exist!!", [])
        }
    } catch (error) {
        console.log(error);
    }
}