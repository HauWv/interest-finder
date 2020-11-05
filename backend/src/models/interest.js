const mongoose = require('mongoose')

const interestSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
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
