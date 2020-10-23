const mongoose = require('mongoose')
const Interest = require('./interest')
const Project = require('./project')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    unique: true,
    required: true,
  },
  testedInterests: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Interest',
    },
  ],
  starredInterests: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Interest',
    },
  ],
  projects: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Project',
    },
  ],
})

class User {
  get profile() {
    return `
    # ${this.name} 
    ## Starred interests (${this.starredInterests.length})
    ${this.starredInterests.map(interest => interest.name).join(', ')}
    ## Tested interests (${this.testedInterests.length})
    ${this.testedInterests.map(interest => interest.name).join(', ')}
    `
  }

  createInterest(name) {
    return new Interest(name)
  }

  async testInterest(interest) {
    this.testedInterests.push(interest)
    interest.tested = true
    await this.save()
  }

  async starInterest(interest) {
    this.starredInterests.push(interest)
    interest.starred = true
    await this.save()
    await interest.save()
  }

  createProject(name) {
    const project = new Project(name)
    this.projects.push(project)
    return project
  }
}

userSchema.loadClass(User)
module.exports = mongoose.model('User', userSchema)
