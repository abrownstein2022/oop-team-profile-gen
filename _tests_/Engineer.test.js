//Jest is testing suite.  Tells Jest to create a test and show "Pending" if nothing else.
// describe("Engineer", () => {
//     it.todo('This is a pending test, somebody create this test for me')
// })

const Engineer = require ("../lib/Engineer.js");
describe.only("Engineer", () => {
    //just used for pending test later
    //it.todo('This is a pending test, somebody create this test for me')
    //! New version of jest *suggests* using async functions to better handle exit of tests
    // prevent the error: A worker process has failed to exit gracefully...
    it("uses defaults if no config provided", async ()=>{
        let mary = new Engineer();
        expect(mary.getName())  .toBe("employee name")
        expect(mary.getId())    .toBe(0)
        expect(mary.getEmail()) .toBe("example@gmail.com")
        expect(mary.getRole())  .toBe("Engineer")        
        expect(mary.getGitHub()) .toBe("no github username entered")        
    })

    it("Uses the provided name in config", async ()=>{
        let mary = new Engineer({ name: 'Mary'});
        expect(mary.getName())  .toBe("Mary")    
    })

    it("Uses the provided email in config", async ()=>{
        let mary = new Engineer({ email: 'mary@gmail.com'});
        expect(mary.getEmail())  .toBe("mary@gmail.com")    
    })

    it("Uses the provided id in config", async ()=>{
        let mary = new Engineer({ id: 2});
        expect(mary.getId())  .toBe(2)    
    })

    it("Uses the provided GitHub username in config", async ()=>{
        let mary = new Engineer({ gitHubUserName: 'mary123'});
        expect(mary.getGitHub())  .toBe('mary123')    
    })

})



