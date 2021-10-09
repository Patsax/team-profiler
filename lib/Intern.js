const Employee = require('./Employee');

class Intern extends Employee {
    constructor(school) {
        super('Jean');

        this.school = school;
    }
}

module.exports = Intern;
