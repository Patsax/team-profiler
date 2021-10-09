const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(github) {
        super('Jean');

        this.github = github;
    }

    getGitHub() {
        return {
            github: this.github
        };
    }
};

module.exports = Engineer;
