// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require ('./Employee');

    class Intern extends Employee { 
    // constructor for specific class
    constructor(name, id, email, school) { 
        // super -  what is inherited from Employee
        super(name, id, email)
        // this.newThing = newThing/s in constructor
        this.school = school;
    } 
    getRole() {
        return 'Intern';
    } 

    getSchool() {
        return this.school;
    }
} 

module.exports = Intern