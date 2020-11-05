const express = require('express');
const router = express.Router();
const jwtAuth = require("../middlewares/jwtAuth")
const userController = require("../controller/user")

/* GET user data no authentication. */
router.get('/', jwtAuth, (dataLogin, req, res, next) => {
  return userController.getUser(req, res)
});

// get user based on id with authentication
router.get('/:id', jwtAuth, (dataLogin, req, res, next) => {
  return userController.getById(req, res)
});

// Post user data (add data to models)
router.post('/add', (req, res) => {
  return userController.insertUser(req, res)
});

//edit data user
router.put('/:id', jwtAuth, async (dataLogin, req, res, next) => {
  return userController.updateUser(dataLogin, req, res)
});

//delete user
router.delete('/:id', jwtAuth, async (dataLogin, req, res, next) => {
  return userController.deleteUser(dataLogin, req, res)
});

const responses = (res, code, message, data) => {
  return res.status(code).send({
      code,
      message,
      data
  })
}
module.exports = router;