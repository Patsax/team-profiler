const Employee = require('../lib/Employee');

test("creates new employee object", () => {
    const employee = new Employee('Jean', 3, 'email@email.com');

    expect(typeof employee.name).toBe('string');
    expect(typeof employee.id).toBe('number');
    expect(typeof employee.email).toBe('string');
});
