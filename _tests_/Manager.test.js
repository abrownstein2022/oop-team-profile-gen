//Jest is testing suite.  Tells Jest to create a test and show "Pending" if nothing else.
// describe("Manager", () => {
//     it.todo('This is a pending test, somebody create this test for me')
// })
const Manager = require ("../lib/Manager.js");
describe.only("Manager", () => {
    //just used for pending test later
    //it.todo('This is a pending test, somebody create this test for me')
    //! New version of jest *suggests* using async functions to better handle exit of tests
    // prevent the error: A worker process has failed to exit gracefully...
    it("uses defaults if no config provided", async ()=>{
        let mary = new Manager();
        expect(mary.getName())  .toBe("employee name")
        expect(mary.getId())    .toBe(0)
        expect(mary.getEmail()) .toBe("example@gmail.com")
        expect(mary.getRole())  .toBe("Manager")        
        expect(mary.getOfficeNumber()) .toBe(0)       
    })

    it("Uses the provided name in config", async ()=>{
        let mary = new Manager({ name: 'Mary'});
        expect(mary.getName())  .toBe("Mary")    
    })

    it("Uses the provided email in config", async ()=>{
        let mary = new Manager({ email: 'mary@gmail.com'});
        expect(mary.getEmail())  .toBe("mary@gmail.com")    
    })

    it("Uses the provided id in config", async ()=>{
        let mary = new Manager({ id:1});
        expect(mary.getId())  .toBe(1)    
    })

    it("Uses the provided office number in config", async ()=>{
        let mary = new Manager({ officeNumber: 1});
        expect(mary.getOfficeNumber())  .toBe(1)    
    })

})





