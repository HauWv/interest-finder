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
  res.send(await User.find(query))
})

async function main() {
  // sign up user
  const jill = await User.create({ name: 'jill', email: 'jill@coyotiv.com', password: 'mypassword' })
  const regina = await User.create({ name: 'regina', email: 'regina@coyotiv.com', password: 'mypassword' })
  const steve = await User.create({ name: 'steve', email: 'steve@coyotiv.com', password: 'mypassword' })

  // create interests
  const jillCoffee = await jill.createInterest({ name: 'coffee' })
  const reginaTea = await regina.createInterest({ name: 'tea' })
  const jillChocolate = await jill.createInterest({ name: 'chocolate' })
  const steveHackers = await steve.createInterest({ name: 'hackers' })

  // test interests
  jill.testInterest(jillCoffee)
  jill.testInterest(jillChocolate)
  steve.testInterest(steveHackers)

  // star interests
  regina.starInterest(reginaTea)
  jill.starInterest(jillCoffee)

  // create projects
  const jillProject = jill.createProject({ name: 'jill project' })
  const reginaProject = regina.createProject({ name: 'voodie project' })

  // add interests to project
  jillProject.addInterest(jillChocolate)
  reginaProject.addInterest(reginaTea)

  // add notes
  reginaProject.notes = 'For Foodies'
  // console.log(jill)
}

main()

router.get('/:userId', async (req, res) => {
  const user = await User.findById(req.params.userId).populate('projects')

  if (user) res.render('user', { user })
  else res.sendStatus(404)
})

/* GET register page */
// router.get('/', (req, res) => {
//   res.render('user', { title: 'Register' })
// })

// router.post('/', async (req, res) => {
//   await User.create({ name: req.body.name, email: req.body.email, password: req.body.password })
// })

module.exports = router
