const express = require('express')

const router = express.Router()

const User = require('../models/user')

/* GET register page */
router.get('/', (req, res) => {
  res.render('signup', { title: 'Register' })
})

router.post('/', async (req, res) => {
  const user = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  })
  res.send(user)
})

module.exports = router
