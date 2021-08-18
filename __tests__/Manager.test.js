const Manager = require("../lib/Manager.js");

test('creates a manager object', () => {
    const manager = new Manager(    "Brenda",
                                    1,
                                    "bjackels5@gmail.com",
                                    2);

    expect(manager.getName()).toEqual(expect.any(String));
    expect(manager.getId()).toEqual(expect.any(Number));
    expect(manager.getEmail()).toEqual(expect.any(String));
    expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
    expect(manager.getRole()).toBe("Manager");
})