const departmentModel = require("../models/department")
const jwt       = require("jsonwebtoken")
const app       = require('../app')
require("dotenv/config")

exports.getDepartment = async (req, res) => {
    try {
        departmentModel.getDepartment((error, data) => {
            if(error) return res.status(500).send({
                error: "Internal Server Error!"
            })
            if(data.length){
                let dataDepartment = []
                data.forEach(element => {
                    dataDepartment.push({id: element.id_department, nama_department: element.nama_department});
                })
                // console.log(dataDepartment);
                return res.status(200).send({
                    code: 200,
                    message: "Success!",
                    data: dataDepartment
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