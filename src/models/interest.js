const mongoose = require('mongoose')

const interestSchema = new mongoose.Schema({
  name: String,
  tested: Boolean,
  starred: Boolean,
  totalSpent: Number,
})

module.exports = mongoose.model('Interest', interestSchema)
