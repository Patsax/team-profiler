const Manager = require('../lib/Manager');

test("creates new manager classed object", () => {
    const manager = new Manager('name', 'id', 'email', 'office')

    expect(manager.role()).toBe('Manager')
});

test("was office number indicated", () => {
    const office = '2'
    const manager = new Manager('name', 'id', 'email', office);

    expect(manager.getOfficeNumber()).toBe(office)
})
