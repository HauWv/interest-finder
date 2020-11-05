const express = require('express')
const router = express.Router()

const Interest = require('../models/interest')

// router.post('/:interestName/star')
// router.post('/starred/:interestName')
// router.post('/:interestName')

// router.post('/')
// router.put('/')
router.patch('/:interestName', async (req, res) => {
  // const interest = await Interest.findOneAndUpdate({ name: interestName, user: req.user }, { starred: req.body.starred })
  if (req.body.tested) {
    await req.user.testInterest(req.params.interestName)
  }

  if (!('starred' in req.body)) return res.sendStatus(200)

  if (req.body.starred) {
    await req.user.starInterest(req.params.interestName)
  } else {
    await req.user.unstarInterest(req.params.interestName)
  }

  res.sendStatus(200)
})

router.get('/', async (req, res) => {
  const query = { owner: req.user }

  if (req.query.name) {
    query.name = req.query.name
  }

  if (req.query.tested) {
    query.tested = req.query.tested
  }

  res.send(await Interest.find(query))
})

router.get('/:interestId', async (req, res) => {
  const interest = await Interest.findById(req.params.interestId)

  if (interest) {
    return res.send(interest)
  }
  res.sendStatus(404)
})

module.exports = router
