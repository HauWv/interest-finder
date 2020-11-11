const express = require('express')
const router = express.Router()

const Project = require('../models/project')

router.get('/', async (req, res) => {
  const query = { owner: req.user } // put owner in here? If so add it to model too.

  if (req.query.name) {
    query.name = req.query.name
  }

  res.send(await Project.find(query))
})

module.exports = router
