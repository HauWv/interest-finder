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
module.exports = User;