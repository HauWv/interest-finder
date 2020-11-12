const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')
const Interest = require('./interest')
const Project = require('./project')
const passportLocalMongoose = require('passport-local-mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  interests: [
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

  async createInterest(name) {
    return Interest.create({ name }) // this returns a promise
  }

  async testInterest(interestName) {
    let interest = this.interests.find(interest => interest.name == interestName)

    if (!interest) {
      interest = await Interest.create({ name: interestName, owner: this })
      this.interests.push(interest)
    }

    interest.tested = true
    interest.save()
    await this.save()
    return interest
  }

  async starInterest(interestName) {
    let interest = this.interests.find(interest => interest.name == interestName)

    if (!interest) {
      interest = await Interest.create({ name: interestName, owner: this })
      this.interests.push(interest)
    }

    interest.starred = true
    interest.save()
    await this.save()
    return interest
  }

  async unstarInterest(interestName) {
    let interest = this.interests.find(interest => interest.name == interestName)

    if (!interest) {
      return false
    }

    interest.starred = false
    interest.save()
    await this.save()
    return interest
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
userSchema.plugin(passportLocalMongoose, {
  usernameField: 'email',
})
module.exports = mongoose.model('User', userSchema)
