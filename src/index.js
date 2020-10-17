const User = require('./user')
require('./interest')
require('./project')

const jill = new User('Jill')
const regina = new User('Regina')
const steve = new User('Steve', 'stephen.a.ingram@gmail.com')

// create interests
const jillCoffee = jill.createInterest('coffee')
const reginaTea = regina.createInterest('tea')
const jillChocolate = jill.createInterest('chocolate')
const steveHackers = steve.createInterest('hackers')
const reginaVeganFood = regina.createInterest('vegan food')
const reginaIceCream = regina.createInterest('ice cream')
const reginaBananaBread = regina.createInterest('banana bread')
const steveCoffee = steve.createInterest('coffee')

// test interests
jill.testInterest(jillCoffee)
jill.testInterest(jillChocolate)
steve.testInterest(steveHackers)

// star interests
regina.starInterest(reginaTea)
jill.starInterest(jillCoffee)
jill.starInterest(jillChocolate)
steve.starInterest(steveCoffee)

// create projects
const jillProject = jill.createProject('jill project')
const reginaProject = regina.createProject('voodie project')
const reginaSideHustle = regina.createProject('side hustle')

// add interests to project
jillProject.addInterest(jillChocolate)
reginaProject.addInterest(reginaVeganFood)
reginaProject.addInterest(reginaIceCream)
reginaProject.addInterest(reginaBananaBread)
reginaSideHustle.addInterest(reginaBananaBread)

// add notes
reginaProject.notes = 'For Foodies'

// reginaProject.interests.forEach(interest => console.log(interest.name))
