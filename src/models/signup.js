const User = require('./user')

class SignUp {
  constructor(name, email, password) {
    this.name = name
    this.email = email
    this.password = password
  }

  signUp(name, email, password) {
    return new User(name, email, password)
  }
}

module.exports = SignUp
