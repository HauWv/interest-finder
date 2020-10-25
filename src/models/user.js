const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')
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
    // unique: true,
    required: true,
  },
  password: {
    type: String,
    // unique: true,
    required: true,
  },
  testedInterests: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Interest',
      autopopulate: true,
    },
  ],
  starredInterests: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Interest',
      autopopulate: true,
    },
  ],
  projects: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Project',
      autopopulate: true,
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
    return Interest.create({ name })
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

  async createProject(name) {
    const project = await Project.create({ name })
    this.projects.push(project) // error coming from this line
    await this.save()
    return project
  }
}

userSchema.loadClass(User)
userSchema.plugin(autopopulate)
module.exports = mongoose.model('User', userSchema)
