const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(github) {
        super('Jean');

        this.github = github;
    }
};

module.exports = Engineer;
