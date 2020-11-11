const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')
const Interest = require('./interest')

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  startDate: {
    type: Date,
    unique: false,
  },
  note: {
    type: String,
    unique: false,
    required: false,
  },
  interests: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Interest',
      autopopulate: true,
    },
  ],
})
class Project {
  set notes(newNote) {
    this.note = newNote
  }

  async addInterest(interest) {
    this.interests.push(interest)
    await this.save()
  }
}

projectSchema.loadClass(Project)
projectSchema.plugin(autopopulate)
module.exports = mongoose.model('Project', projectSchema)
