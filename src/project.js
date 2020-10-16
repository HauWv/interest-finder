class Project {
  constructor(name, client = '', product = '') {
    this.name = name
    this.startDate = Date.now()
    this.client = client
    this.product = product
    this.interests = []
  }
}

module.exports = Project

// does it make sense to have a typeOfConversion property? Can one project have different conversion types? Or normally only one?
