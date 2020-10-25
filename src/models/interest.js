const mongoose = require('mongoose')

const interestSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  tested: {
    type: Boolean,
  },
  starred: {
    type: Boolean,
  },
  totalSpent: {
    type: Number,
  },
})

module.exports = mongoose.model('Interest', interestSchema)
