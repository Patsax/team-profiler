const Manager = require('../lib/Manager');

test("creates new manager classed object", () => {
    const manager = new Manager(2)

    expect(typeof manager.officeNumber).toBe('number')
});
