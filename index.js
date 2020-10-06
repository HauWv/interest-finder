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

    viewTestedInterests() {
        if (this.testedInterests.length === 0) {
            console.log("No tested interests yet!");
            return;
        }
        this.testedInterests.forEach(interest => console.log(interest.name));
    }

    viewStarredInterests() {
        if (this.starredInterests.length === 0) {
            console.log("You haven't starred any interests yet.");
            return;
        }
        this.starredInterests.forEach(interest => console.log(interest.name));
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

console.log("Nastran premium account? " + nastaran.premium);

// buy premium 
nastaran.buyPremium();
console.log("Nastran premium account? " + nastaran.premium);

// create keywords
const coffee = jill.createInterest('coffee');
const tea = regina.createInterest('tea');
const chocolate = jill.createInterest('chocolate');

// use keywords
jill.testInterest(coffee);
jill.testInterest(chocolate);
console.log('Jill\'s tested interests: ', jill.testedInterests);

// star keywords 
regina.starInterest(tea);
regina.starInterest(chocolate);
console.log('Regina\'s starred interests: ', regina.starredInterests);
// chocolate tested should be false! 

// view my used keywords
regina.viewTestedInterests();
jill.viewTestedInterests();
nastaran.viewTestedInterests();

// view my starred keywords
regina.viewStarredInterests();
jill.viewStarredInterests();
nastaran.viewStarredInterests();