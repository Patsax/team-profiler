const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email);
        this.office = office;
    }

    getOfficeNumber() {
        return this.office;
    }

    role() {
        return 'Manager'
    }
};

module.exports = Manager;