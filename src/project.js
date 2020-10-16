class Project {
  constructor(name) {
    this.name = name
    this.startDate = Date.now()
    this.note = ''
    this.interests = []
  }

  set notes(newNote) {
    this.note = newNote
  }

  addInterest(interest) {
    this.interests.push(interest)
  }
}

module.exports = Project
