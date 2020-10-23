const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
  name: String,
  startDate: Date,
  note: String,
  interests: [],
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
module.exports = mongoose.model('Project', projectSchema)
