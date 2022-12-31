const Employee = require ("../lib/Employee.js");
//https://jestjs.io/docs/expect
//Jest is testing suite.  Tells Jest to create a test and show "Pending" if nothing else.
describe.only("Employee", () => {
    //just used for pending test later
    //it.todo('This is a pending test, somebody create this test for me')
    //! New version of jest *suggests* using async functions to better handle exit of tests
    // prevent the error: A worker process has failed to exit gracefully...
    it("uses defaults if no config provided", async ()=>{
        let greg = new Employee();
        expect(greg.getName())  .toBe("employee name")
        expect(greg.getId())    .toBe(0)
        expect(greg.getEmail()) .toBe("example@gmail.com")
        expect(greg.getRole())  .toBe("Employee")        
    })

    it("Uses the provided name in config", async ()=>{
        let greg = new Employee({ name: 'Greg'});
        expect(greg.getName())  .toBe("Greg")    
    })

    it("Uses the provided email in config", async ()=>{
        let greg = new Employee({ email: 'greg@gmail.com'});
        expect(greg.getEmail())  .toBe("greg@gmail.com")    
    })

    it("Uses the provided id in config", async ()=>{
        let greg = new Employee({ id: 99});
        expect(greg.getId())  .toBe(99)    
    })

})

