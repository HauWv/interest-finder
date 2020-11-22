const express = require('express')
const passport = require('passport')
// const { celebrate, Joi, errors, Segments } = require('celebrate')
const { validate, ValidationError, Joi } = require('express-validation')

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
  // console.log(req)
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

// Facebook stuff

// redirect user to Facebook for authentication
router.get('/auth/facebook', passport.authenticate('facebook'))

// Facebook will redirect the user to this URL after approval
router.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/' }), (req, res) => {
  // Successful authentication, redirect home.
  res.redirect('/')
})

module.exports = router
