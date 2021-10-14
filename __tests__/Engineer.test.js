const Engineer = require('../lib/Engineer');

test("creates new engineer classed object", () => {
    const engineer = new Engineer('name', 'id', 'email', 'github');

    expect(engineer.role()).toBe('Engineer');
});

test("was GitHub name indicated", () => {
    const github = 'github'
    const engineer = new Engineer('name', 'id', 'email', github);

    expect(engineer.getGitHub()).toBe(github)
});
