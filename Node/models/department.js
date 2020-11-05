const conn = require("../config/database")

const getDepartment = (cb = () => {})=> {
  try {
    conn.query("SELECT * FROM department", (error, results, fields) => {
      if(error){
        console.log("Error: getDepartment.if - "+error);
        return cb("Internal Server Error!!", null)
      }
      return cb(null, results)
    })
  } catch (error) {
    console.log("Error: getDepartment - "+error);
    return cb("Internal Server Error!!", null)
  }
}

module.exports = { getDepartment }