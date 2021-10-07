const Employee = require('../lib/Employee');

test("creates new employee object", () => {
    const employee = new Employee('Jean');

    expect(employee.name).toBe('Jean');
    expect(employee.id).toBe(expect.any(String));
    expect(employee.email).toBe(expect.any(String));
});
