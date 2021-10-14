const Intern = require('../lib/Intern');

test("creates new intern classed object", () => {
    const intern = new Intern('name', 'id', 'email', 'school');

    expect(intern.role()).toBe('Intern')
});

test("was a school indicated", () => {
    const school = 'Butler'
    const intern = new Intern('name', 'id', 'email', school);

    expect(intern.getSchool()).toBe(school)
});
