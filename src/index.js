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
const jillProject = jill.createProject('jill project', 'new client', 'bicycles')
const reginaProject = regina.createProject('coyotiv project', undefined, 'voodie app')
const reginaSideHustle = regina.createProject('side hustle')

// add interests to project
jill.addInterestToProject(jillChocolate, jillProject)
regina.addInterestToProject(reginaVeganFood, reginaProject)
regina.addInterestToProject(reginaBananaBread, reginaProject)
regina.addInterestToProject(reginaIceCream, reginaSideHustle)

// deactivate project
regina.deactivateProject(reginaSideHustle)

reginaProject.interests.forEach(interest => console.log(interest.name))
