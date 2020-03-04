const express = require('express');
const User = require('../models/User');

const router = express.Router();

router.get('/', async (req, res) => {
   const users = await User.find();
   res.send(users)
});

router.post('/', async (req, res) => {
    const object = {
      username: req.body.username,
      password: req.body.password
    };
   const user = new User(object);
   try {
       await user.save();
       return res.send(user)
   } catch (error) {
       return res.send(400).send(error);
   }
});

module.exports = router;