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

// does it make sense to have a typeOfConversion property? Can one project have different conversion types? Or normally only one?
