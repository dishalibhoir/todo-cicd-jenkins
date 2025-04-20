// Requiring the assert module for assertions
const assert = require('assert');

// Grouping similar tests inside a describe block
describe("Simple Calculations", () => {

    before(() => {
        // This part executes once before all tests
        console.log("This part executes once before all tests");
    });

    after(() => {
        // This part executes once after all tests
        console.log("This part executes once after all tests");
    });
    
    // Nested blocks for different sets of tests
    describe("Test1", () => {
        beforeEach(() => {
            // This part executes before every test in this block
            console.log("executes before every test in Test1");
        });
        
        it("should return 5 when adding 2 + 3", () => {
            assert.equal(2 + 3, 5); // Check if 2 + 3 equals 5
        });

        it("should return 6 when multiplying 2 * 3", () => {
            assert.equal(2 * 3, 6); // Check if 2 * 3 equals 6
        });
    });

    describe("Test2", () => {
        beforeEach(() => {
            // This part executes before every test in this block
            console.log("executes before every test in Test2");
        });

        it("should return 5 when adding 2 + 3", () => {
            assert.equal(2 + 3, 5); // Check if 2 + 3 equals 5
        });

        it("should return 8 when multiplying 2 * 4", () => {
            assert.equal(2 * 4, 8); // Check if 2 * 4 equals 8
        });
    });
});
