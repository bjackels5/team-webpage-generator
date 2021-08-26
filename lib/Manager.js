const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor(name, id, email, officeNumber, teamTitle) {
        super(name, id, email);

        this.officeNumber = officeNumber;
        this.teamTitle = teamTitle;
        console.log("Manager constructor, this: ", this);
    }    

    getOfficeNumber() { return this.officeNumber; }
    getTeamTitle() { return this.teamTitle; }
    getRole() { return "Manager"; }
}

module.exports = Manager;