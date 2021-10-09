const Employee = require('./Employee');

class Intern extends Employee {
    constructor(school) {
        super('Jean');

        this.school = school;
    }

    getSchool() {
        return {
            school: this.school
        };
    }
}

module.exports = Intern;
