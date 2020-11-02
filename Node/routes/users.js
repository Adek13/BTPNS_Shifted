var express = require('express');
var router = express.Router();
var User = require("../models/user")

/* GET user data. */
router.get('/', (req, res, next) => {
  res.send(User)
});

// Login
router.get('/:username/:password', async (req, res, next) => {
  let filtered = await User.filter(user => user.username === req.params.username && user.password === req.params.password)
  if(filtered.length){
    console.log(filtered);
    res.send(filtered)
  }else{
    res.send({error: true})
  }
});

// Post user data (add data to models)
router.post('/add', (req, res, next) => {
  User.push(req.body)
  res.send({error: false})
});
module.exports = router;