const User = require('./user');
const Interest = require('./interest');

const jill = new User('Jill');
const regina = new User('Regina');
const nastaran = new User('Nastaran');
const steve = new User('Steve');

// // buy premium
nastaran.buyPremium();

// create interests
const coffee = jill.createInterest('coffee');
const tea = regina.createInterest('tea');
const chocolate = jill.createInterest('chocolate');

// test interests
jill.testInterest(coffee);
jill.testInterest(chocolate);

// star interests
regina.starInterest(tea);
regina.starInterest(chocolate);
jill.starInterest(coffee)
jill.starInterest(chocolate)
jill.starInterest(tea)

console.log(jill.profile);
console.log(regina.profile);