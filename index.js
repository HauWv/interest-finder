class User {
    constructor(name) {
        this.name = name;
        this.premium = false;
        this.testedInterests = [];
        this.starredInterests = [];
    }

    buyPremium() {
        this.premium = true;
    }

    createInterest(name) {
        return new Interest(name);
    }

    testInterest(interest) {
        this.testedInterests.push(interest);
        interest.tested = true;
    }

    starInterest(interest) {
        this.starredInterests.push(interest);
        interest.starred = true;
    }

}

class Interest {
    constructor(name) {
        this.name = name;
        this.tested = false;
        this.starred = false;
    }
}


const jill = new User('Jill');
const regina = new User('Regina');
const nastaran = new User('Nastaran');
const steve = new User('Steve');

console.log("Nastran premium account? " + nastaran.premium);

// buy premium 
nastaran.buyPremium();
console.log("Nastran premium account? " + nastaran.premium);

// create interests
const coffee = jill.createInterest('coffee');
const tea = regina.createInterest('tea');
const chocolate = jill.createInterest('chocolate');

// test interests
jill.testInterest(coffee);
jill.testInterest(chocolate);
console.log('Jill\'s tested interests: ', jill.testedInterests);

// star interests
regina.starInterest(tea);
regina.starInterest(chocolate);
console.log('Regina\'s starred interests: ', regina.starredInterests);
// chocolate tested should be false! 

// view my tested interests
regina.viewTestedInterests();
jill.viewTestedInterests();
nastaran.viewTestedInterests();

// view my starred interests
regina.viewStarredInterests();
jill.viewStarredInterests();
nastaran.viewStarredInterests();
