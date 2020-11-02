const express = require('express')

const router = express.Router()

const User = require('../models/user')
require('../models/interest')
require('../models/project')
require('../models/login')

router.get('/', async (req, res) => {
  const query = {}

  if (req.query.name) {
    query.name = req.query.name
  }
  // return res.send('Hello!')
  res.send(await User.find(query))
})

router.get('/initialize', async (req, res) => {
  const jill = await User.create({ name: 'jill', email: 'jill@coyotiv.com', password: 'mypassword' })
  const regina = await User.create({ name: 'regina', email: 'regina@coyotiv.com', password: 'mypassword' })
  const steve = await User.create({ name: 'steve', email: 'steve@coyotiv.com', password: 'mypassword' })

  // create interests
  const jillCoffee = await jill.createInterest('coffee') // this is awaiting the promise (from user.js) Without await this will be a promise not an interest
  const reginaTea = await regina.createInterest('tea')
  const steveHackers = await steve.createInterest('hackers')
  const jillChocolate = await jill.createInterest('chocolate')
  // Promise.all - to execute in parrllel and resolve altogether. Its fine to do this because these dont depend on each other

  // test interests
  await jill.testInterest(jillCoffee)
  await jill.testInterest(jillChocolate)
  await steve.testInterest(steveHackers)

  // star interests
  await regina.starInterest(reginaTea)
  await jill.starInterest(jillCoffee)

  // create projects
  const jillProject = await jill.createProject('jill project') // error from this line
  const reginaProject = await regina.createProject('voodie project')

  // add interests to project
  await jillProject.addInterest(jillChocolate)
  await reginaProject.addInterest(reginaTea)

  // add notes
  reginaProject.notes = 'For Foodies'
  // console.log(jill)
  res.sendStatus(200)
})

router.get('/:userId', async (req, res) => {
  const user = await User.findById(req.params.userId).populate('projects')

  if (user) res.send(user)
  else res.sendStatus(404)
})

// router.get('/signup')

module.exports = router
