const Intern = require('../lib/Intern');

test("creates new intern classed object", () => {
    const intern = new Intern('Butler');

    expect(typeof intern.school).toBe('string')
});
