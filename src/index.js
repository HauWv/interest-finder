const User = require('./user')
require('./interest')

const jill = new User('Jill')
const regina = new User('Regina')
const nastaran = new User('Nastaran')
const steve = new User('Steve')

// // buy premium
nastaran.buyPremium()

// create interests
const coffee = jill.createInterest('coffee')
const tea = regina.createInterest('tea')
const chocolate = jill.createInterest('chocolate')
const hackers = steve.createInterest('hackers')

// test interests
jill.testInterest(coffee)
jill.testInterest(chocolate)
steve.testInterest(hackers)
steve.testInterest(tea)

// star interests
regina.starInterest(tea)
regina.starInterest(chocolate)
jill.starInterest(coffee)
jill.starInterest(chocolate)
jill.starInterest(tea)
