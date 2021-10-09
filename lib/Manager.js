const Employee = require('./Employee');

class Manager extends Employee {
    constructor(officeNumber) {
        super('Jean');

        this.officeNumber = officeNumber;
    }
};

module.exports = Manager;