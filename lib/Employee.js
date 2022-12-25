//class definition
class Employee{
    // using "{}" (empty object) as the default value of our config object
    // this allows checking for nested values
    // prevents error: "Cannot read properties "name" of undefined => undefined.name
    constructor(config = {}){  //function called when you create the employee: new Employee(). how we set up the class. instantiating,instantiation
        // this.#name=      config.name         ?? "employee name" //! private property
        this.name=      config.name         ?? "employee name"
        this.id=        config.id           ?? 0     //default value after ??      
        this.email=     config.email        ?? "example@gmail.com"
        this.role=      config.role         ?? "employee"
        // if(config && config.name && config.name.whatever)
        // same as
        // if(config?.name?.whatever)
    }

    // #doThing(){} // private method

    // getName(){ return this.name } // greg.getName()
    // setName(newName){ return this.name } // greg.setName('gregory')
    // get name(){ return this.name } // greg.name (class getter)
    // set name(newName){ this.name = newName}//  greg.name = 'gregory' (class setter)
   //IIFE immediately invoked function expression  ;(() => {})(); - runs immediately after definition, completely anonymous, isolated, cannot be invoked (self invoked)

    getName(){return this.name}
    getId(){return this.id}
    getEmail(){return this.email}
    getRole(){return this.role}   
}

// let Greg = new Employee({ name: 'Greg'})
// Greg.#doThing() //! does not exist (private method)
// Greg.#name //! does not exist (private property)
// new Employee('Mike', 24, 'a.a.com')

// new Employee({
//     email: 'pratiqdev@gmail.com'
//     name: 'myNme',
// })

// we're using require 
//export default Employee;
module.exports = Employee;