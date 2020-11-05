const conn = require("../config/database")

const getUser = (username = null, password = null, cb = () => {})=> {
  try {
    // const query = `SELECT * FROM user WHERE username = '${username}' AND password = '${password}'`
    conn.query("SELECT a.*, b.nama_role FROM user a join role b on a.id_role = b.id_role WHERE a.username = ? AND a.password = ? limit 1", [username, password], (error, results, fields) => {
      if(error){
        console.log("Error: getUser.if - "+error);
        return cb("Internal Server Error!!", null)
      }
      return cb(null, results)
    })
  } catch (error) {
    console.log("Error: getUser - "+error);
    return cb("Internal Server Error!!", null)
  }
}

const getUserAll = (cb = () => {})=> {
  try {
    // const query = `SELECT * FROM user WHERE username = '${username}' AND password = '${password}'`
    conn.query("SELECT a.id_user, a.username, a.email, b.nama_role status FROM user a join role b on a.id_role = b.id_role", (error, results, fields) => {
      if(error){
        console.log("Error: getUserAll.if - "+error);
        return cb("Internal Server Error!!", null)
      }
      return cb(null, results)
    })
  } catch (error) {
    console.log("Error: getUserAll - "+error);
    return cb("Internal Server Error!!", null)
  }
}


const insertUser = (data, cb = () => {})=> {
  try {
    // const query = `SELECT * FROM user WHERE username = '${username}' AND password = '${password}'`
    conn.query("INSERT INTO user VALUES (null, ?, ?, ?, ?)", [data.username, data.email, data.password, data.id_role], (error, results, fields) => {
      if(error){
        console.log("Error: insertUser.if - "+error);
        return cb("Internal Server Error!!", null)
      }
      return cb(null, results)
    })
  } catch (error) {
    console.log("Error: insertUser - "+error);
    return cb("Internal Server Error!!", null)
  }
}

const updateUser = (data, cb = () => {})=> {
  try {
    conn.query("UPDATE user SET username=?, email=?, password=?, id_role=? WHERE id_user = ?", 
    [data.username, data.email, data.password, data.id_role, data.id_user], (error, results, fields) => {
      try {
        if(error){
          console.log("Error: insertUser.if - "+error);
          return cb("Internal Server Error!!", null)
        }
        return cb(null, results)
      } catch (error) {
        console.log("Error: insertUser.query - "+error);
          return cb("Internal Server Error!!", null)
      }
    })
    // console.log(data);
  } catch (error) {
    console.log("Error: insertUser - "+error);
    return cb("Internal Server Error!!", null)
  }
}

const deleteUser = (id, cb = () => {})=> {
  try {
    // const query = `SELECT * FROM user WHERE username = '${username}' AND password = '${password}'`
    conn.query("DELETE FROM user WHERE id_user = ?", [id], (error, results, fields) => {
      if(error){
        console.log("Error: insertUser.if - "+error);
        return cb("Internal Server Error!!", null)
      }
      return cb(null, results)
    })
  } catch (error) {
    console.log("Error: insertUser - "+error);
    return cb("Internal Server Error!!", null)
  }
}

const getById = (id, cb = () => {})=> {
  try {
    // console.log(id);
    conn.query("SELECT a.id_user, a.email, a.username, a.password, b.id_role, b.nama_role status FROM user a join role b on a.id_role = b.id_role WHERE a.id_user = ?", [id], (error, results, fields) => {
      if(error){
        console.log("Error: getUser.if - "+error);
        return cb("Internal Server Error!!", null)
      }
      return cb(null, results)
    })
  } catch (error) {
    console.log("Error: getUser - "+error);
    return cb("Internal Server Error!!", null)
  }
}

const register = (data, cb = () => {})=> {
  try {
    console.log(data);
    conn.query("INSERT INTO user VALUES (null, ?, ?, ?, ?)", [data.username, data.email, data.password, data.id_role], (error, results, fields) => {
      try {
        if(error){
          console.log("Error: insertUser.if - "+error);
          return cb("Internal Server Error!!", null)
        }else{
          const {nama, tanggal_lahir, jenis_kelamin, alamat, agama, status_perkawinan, pekerjaan, kewarganegaraan, department} = data
          conn.query("INSERT INTO employee VALUES (null, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", 
          [nama, tanggal_lahir, jenis_kelamin, alamat, agama, status_perkawinan, pekerjaan, kewarganegaraan, results.insertId , department], (error, results, fields) => {
            try {
              if(error){
                console.log("Error: insertUser.if - "+error);
                return cb("Internal Server Error!!", null)
              }
              return cb(null, results)
            } catch (error) {
              console.log("Error: insertUser.if.employee - "+error);
              return cb("Internal Server Error!!", null)
            }
          })
        }
      } catch (error) {
        console.log("Error: insertUser.if.user - "+error);
        return cb("Internal Server Error!!", null)
      }
    })
  } catch (error) {
    console.log("Error: insertUser - "+error);
    return cb("Internal Server Error!!", null)
  }
}

module.exports = { getUser, getById, getUserAll, insertUser, updateUser, deleteUser, register }