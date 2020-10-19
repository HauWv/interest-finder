const User = require('./user')

class SignUp {
  constructor(name, email, password) {
    return new User(name, email, password)
  }
}

module.exports = SignUp
