// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require ('./lib/Employee'); 

class Manager extends Employee { 
    // constructor for specific class
    constructor(name, id, email, officeNumber) { 
        // super -  what is inherited from Employee
        super(name, id, email)
        // this.newThing = newThing/s in constructor
        this.officeNumber = officeNumber;
    } 
    getRole() {
        return 'Manager';
    } 

    getOfficeNumber() {
        return this.officeNumber;
    }
} 

module.exports = Manager