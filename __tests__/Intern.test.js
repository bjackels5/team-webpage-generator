const Intern = require("../lib/Intern.js");


test('creates an Intern object', () => {
    const employee = new Intern(  "Brenda",
                                    1,
                                    "bjackels5@gmail.com",
                                    "UCF BootCamp");
    expect(employee.getName()).toEqual(expect.any(String));
    expect(employee.getId()).toEqual(expect.any(Number));
    expect(employee.getEmail()).toEqual(expect.any(String));
    expect(employee.getRole()).toBe("Intern");
    expect(employee.getSchool()).toEqual(expect.any(String));
})
