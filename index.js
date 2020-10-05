class User {
    constructor(name) {
        this.name = name;
        this.premium = false;
        this.usedKeywords = [];
        this.starredKeywords = [];
    }

    buyPremium() {
        this.premium = true;
    }

    createKeyword(name) {
        return new Keyword(name);
    }

    useKeyword(keyword) {
        this.usedKeywords.push(keyword);
        keyword.used = true;
    }

    starKeyword(keyword) {
        this.starredKeywords.push(keyword);
        keyword.starred = true;
    }

    viewUsedKeywords() {
        if (this.usedKeywords.length === 0) {
            console.log("No used keywords yet!");
            return;
        }
        this.usedKeywords.forEach(keyword => console.log(keyword.name));
    }

    viewStarredKeywords() {
        if (this.starredKeywords.length === 0) {
            console.log("You haven't starred any keywords yet.");
            return;
        }
        this.starredKeywords.forEach(keyword => console.log(keyword.name));
    }
}

class Keyword {
    constructor(name) {
        this.name = name;
        this.used = false;
        this.starred = false;
    }
}

class Campaign {
    constructor(name) {
        this.name = name;
        this.active = true;
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

// create keywords
const coffee = jill.createKeyword('coffee');
const tea = regina.createKeyword('tea');
const chocolate = jill.createKeyword('chocolate');

// use keywords
jill.useKeyword(coffee);
jill.useKeyword(chocolate);
console.log('Jill\'s used keywords: ', jill.usedKeywords);

// star keywords 
regina.starKeyword(tea);
regina.starKeyword(chocolate);
console.log('Regina\'s starred keywords: ', regina.starredKeywords);
// chocolate used should be false! 

// view my used keywords
regina.viewUsedKeywords();
jill.viewUsedKeywords();
nastaran.viewUsedKeywords();

// view my starred keywords
regina.viewStarredKeywords();
jill.viewStarredKeywords();
nastaran.viewStarredKeywords();