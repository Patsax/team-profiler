const Engineer = require('../lib/Engineer');

test("creates new engineer classed object", () => {
    const engineer = new Engineer('engine3');

    expect(typeof engineer.github).toBe('string');
});
