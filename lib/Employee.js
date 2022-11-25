//class definition
class Employee{
    constructor(config){  //function called when you create the employee: new Employee(). how we set up the class. instantiating,instantiation
        // this.#name=      config.name         ?? "employee name" //! private property
        this.name=      config.name         ?? "employee name"
        this.id=        config.id           ?? 0     //default value after ??      
        this.email=     config.email        ?? "example@gmail.com"
        this.role=      config.role         ?? "employee"
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

// let Greg = new Employee({ name: 'Gref'})
// Greg.#doThing() //! does not exist (private method)
// Greg.#name //! does not exist (private property)
// new Employee('Mike', 24, 'a.a.com')

// new Employee({
//     email: 'pratiqdev@gmail.com'
//     name: 'myNme',
// })

export default Employee;