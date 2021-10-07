const Employee = require('../lib/Employee');

test("creates new employee object", () => {
    const employee = new Employee('Jean');

    expect(employee.name).toBe('Jean');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('email@email.com');
});
