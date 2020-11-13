const express = require('express')
const passport = require('passport')

const User = require('../models/user')

const router = express.Router()

// fetch current session
router.get('/session', (req, res) => {
  res.send(req.user)
})

// create a new account

router.post('/', async (req, res, next) => {
  const { name, email, password } = req.body

  try {
    const user = await User.register({ name, email }, password)
    res.send(user)
  } catch (e) {
    next(e)
  }
})

// log in
router.post('/session', passport.authenticate('local', { failWithError: true }), async (req, res) => {
  res.send(req.user)
})

// log out
router.delete('/session', async (req, res, next) => {
  await req.logout()

  req.session.regenerate(err => {
    if (err) return next(err)

    return res.sendStatus(200)
  })
})

module.exports = router
