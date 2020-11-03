const express = require('express');
const router = express.Router();
const User = require("../models/user")
const jwtAuth = require("../middlewares/jwtAuth")

/* GET user data. */
router.get('/', (req, res) => {
  try {
    return responses(res, 200, "Sukses", User)
  } catch (error) {
    console.log(error);
  }
});

router.get('/:id', jwtAuth, (dataLogin, req, res, next) => {
  try {
      let [filtered] = User.filter(data => data.id == req.params.id)
      return responses(res, 200, "Data Ditemukan", filtered)
  } catch (error) {
    console.log(error);
  }
});

// Post user data (add data to models)
router.post('/add', (req, res) => {
  try {
    let [filtered] = User.filter(data => data.email == req.body.email)
      if(filtered){
        return responses(res, 409, "Email Sudah Ada")
      }else{
        User.push(req.body)
        return responses(res, 200, "Berhasil Tambah")
      }
  } catch (error) {
    console.log(error);
  }
});

//edit data user
router.put('/:id', jwtAuth, async (dataLogin, req, res, next) => {
  let berhak = User.some(() => dataLogin.id == req.params.id)
  if(dataLogin.status == "admin" || berhak){
    // let [filter] = await User.filter(data => data.id == req.params.id)
    // filtered = {...filter, ...req.body}
    getIndex = User.findIndex(data=>data.id == req.params.id)
    User[getIndex] = {...User[getIndex], ...req.body}
    return responses(res, 200, "Berhasil Update")
  }else{
    return responses(res, 403, "maaf, hanya admin yang boleh edit!", [])
  }
});

//delete user
router.delete('/:id', jwtAuth, async (dataLogin, req, res, next) => {
  try {
    if(dataLogin.status == "admin"){
      await User.splice(User.findIndex(item => item.id == req.params.id), 1)
      return responses(res, 200, "Berhasil Hapus")
    }else{
      return responses(res, 403, "maaf, hanya admin yang boleh hapus!", dataLogin)
    }
  } catch (error) {
    console.log(error);
  }
});

const responses = (res, code, message, data) => {
  return res.send({
      code,
      message,
      data
  })
}
module.exports = router;