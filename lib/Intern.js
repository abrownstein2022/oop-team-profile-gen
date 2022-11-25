// import Employee from './Employee.js';
const Employee = require('./Employee.js');
//class definition
class Intern extends Employee{  //shows inheritance
    constructor(config = {}){  //function called when you create the employee: new Employee(). how we set up the class. instantiating,instantiation
        super({
            // name:   config.name,
            // id:     config.id,
            // email:  config.email,
            ...config, // This SPREADS out the key:values of config, then you can overwrite any properties if needed, or add new ones
            role:   'Intern'
        })   //super calls parent class constructor Employee- must be first line in the constructor even if no config - for example utility functions that are pre-configured ie. clock
        
        //! These are all inherited from employee
        // this.name=      config.name         ?? "employee name"
        // this.id=        config.id           ?? 0     //default value after ??      
        // this.email=     config.email        ?? "example@gmail.com"
        // this.role=      config.role         ?? "employee"
        this.school=       config.school       ?? "no school"
    }

   //! These methods are all inherited from Employee class
    // getName(){return this.name}
    // getId(){return this.id}
    // getEmail(){return this.email}
    // getRole(){return this.role}   
    getSchool(){ return this.school }
}

// let Greg = new Employee({ name: 'Gref'})
// Greg.#doThing() //! does not exist (private method)
// Greg.#name //! does not exist (private property)
// new Employee('Mike', 24, 'a.a.com')

// new Employee({
//     email: 'pratiqdev@gmail.com'
//     name: 'myNme',
// })

//export default Intern;
module.exports = Intern;