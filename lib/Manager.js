const Employee = require('./Employee');

class Manager extends Employee {
    constructor(officeNumber) {
        super();

        this.officeNumber = officeNumber;
    }

    role() {
        return 'Manager'
    }
};

module.exports = Manager;