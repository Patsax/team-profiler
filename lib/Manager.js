const Employee = require('./Employee');

class Manager extends Employee {
    constructor(officeNumber) {
        super(name);

        this.officeNumber = officeNumber;
    }
};

module.exports = Manager;