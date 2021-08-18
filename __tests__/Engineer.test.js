const Engineer = require("../lib/Engineer.js");


test('creates an engineer object', () => {
    const employee = new Engineer(  "Brenda",
                                    1,
                                    "bjackels5@gmail.com",
                                    "bjackels5");
    expect(employee.getName()).toEqual(expect.any(String));
    expect(employee.getId()).toEqual(expect.any(Number));
    expect(employee.getEmail()).toEqual(expect.any(String));
    expect(employee.getRole()).toBe("Engineer");
    expect(employee.getGitHub()).toEqual(expect.any(String));
})
