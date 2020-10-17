const User = require('./user')

class SignUp {
  signUp(name, email, password) {
    return new User(name, email, password)
  }
}

module.exports = SignUp
