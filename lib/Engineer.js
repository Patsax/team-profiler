const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(github) {
        super(name);

        this.github = github;
    }

    getGitHub() {
        return {
            github: this.github
        };
    }
};

module.exports = Engineer;
