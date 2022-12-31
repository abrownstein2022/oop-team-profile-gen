//Jest is testing suite.  Tells Jest to create a test and show "Pending" if nothing else.
// describe("Intern", () => {
//     it.todo('This is a pending test, somebody create this test for me')
// })
const Intern = require ("../lib/Intern.js");
describe.only("Intern", () => {
    //just used for pending test later
    //it.todo('This is a pending test, somebody create this test for me')
    //! New version of jest *suggests* using async functions to better handle exit of tests
    // prevent the error: A worker process has failed to exit gracefully...
    it("uses defaults if no config provided", async ()=>{
        let joe = new Intern();
        expect(joe.getName())  .toBe("employee name")
        expect(joe.getId())    .toBe(0)
        expect(joe.getEmail()) .toBe("example@gmail.com")
        expect(joe.getRole())  .toBe("Intern")        
        expect(joe.getSchool()) .toBe("no school")        
    })

    it("Uses the provided name in config", async ()=>{
        let joe = new Intern({ name: 'Joe'});
        expect(joe.getName())  .toBe("Joe")    
    })

    it("Uses the provided email in config", async ()=>{
        let joe = new Intern({ email: 'joe@gmail.com'});
        expect(joe.getEmail())  .toBe("joe@gmail.com")    
    })

    it("Uses the provided id in config", async ()=>{
        let joe = new Intern({ id: 3});
        expect(joe.getId())  .toBe(3)    
    })

    it("Uses the provided school in config", async ()=>{
        let joe = new Intern({ school: 'Rutgers'});
        expect(joe.getSchool())  .toBe('Rutgers')    
    })

})



