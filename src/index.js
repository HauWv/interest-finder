const User = require('./user')
require('./interest')
require('./project')

const jill = new User('Jill')
const regina = new User('Regina')
const steve = new User('Steve')

// create interests
const coffee = jill.createInterest('coffee')
const tea = regina.createInterest('tea')
const chocolate = jill.createInterest('chocolate')
const hackers = steve.createInterest('hackers')
const veganFood = regina.createInterest('vegan food')
const iceCream = regina.createInterest('ice cream')
const bananaBread = regina.createInterest('banana bread')

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

// create projects
const jillProject = jill.createProject('jillProject', 'new client', 'bicycles')
const reginaProject = regina.createProject('coyotiv project', undefined, 'voodie app')
const reginaSideHustle = regina.createProject('side hustle')

// add interests to project
jill.addInterestToProject(jillProject, chocolate)
regina.addInterestToProject(veganFood, reginaProject)
regina.addInterestToProject(bananaBread, reginaProject)
regina.addInterestToProject(iceCream, reginaSideHustle)

// deactivate project
regina.deactivateProject(reginaSideHustle)

reginaProject.savedInterests.forEach(interest => console.log(interest.name))
