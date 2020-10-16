const Interest = require('./interest')
const Project = require('./project')

class User {
  constructor(name, email) {
    this.name = name
    this.email = email
    this.testedInterests = []
    this.starredInterests = []
    this.projects = []
  }

  get profile() {
    return `
    # ${this.name} 
    ## Account: ${this.premium === true ? 'Premium' : 'Basic'}
    ## Starred interests (${this.starredInterests.length})
    ${this.starredInterests.map(interest => interest.name).join(', ')}
    ## Tested interests (${this.testedInterests.length})
    ${this.testedInterests.map(interest => interest.name).join(', ')}
    `
  }

  createInterest(name) {
    return new Interest(name)
  }

  testInterest(interest) {
    this.testedInterests.push(interest)
    interest.tested = true
  }

  starInterest(interest) {
    this.starredInterests.push(interest)
    interest.starred = true
  }

  createProject(name) {
    const project = new Project(name)
    this.projects.push(project)
    return project
  }

  addInterestToProject(interest, project) {
    project.interests.push(interest)
  }
}

module.exports = User
