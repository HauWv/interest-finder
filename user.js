const Interest = require('./interest');
class User {
    constructor(name) {
        this.name = name;
        this.premium = false;
        this.testedInterests = [];
        this.starredInterests = [];
    }

    get profile() {
        return `
    # ${this.name} 
    ## Account: ${this.premium === true ? 'Premium' : 'Basic'}
    ## Starred interests (${this.starredInterests.length})
    ${this.starredInterests.map(interest => interest.name).join(', ')}
    ## Tested interests (${this.testedInterests.length})
    ${this.testedInterests.map(interest => interest.name).join(', ')}
    `
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
module.exports = User;