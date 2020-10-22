// const mongoose = require('mongoose')
class Interest {
  constructor(name) {
    this.name = name
    this.tested = false
    this.starred = false
    this.totalSpent = 0
  }
}

module.exports = Interest
