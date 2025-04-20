// Requiring module
const assert = require('assert');

// We can group similar tests inside a describe block
describe("Simple Calculations", () => {
    before(() => {
        console.log("This part executes once before all tests");
    });

    after(() => {
        console.log("This part executes once after all tests");
    });

    // We can add nested blocks for different tests
    describe("Test1", () => {
        beforeEach(() => {
            console.log("executes before every test");
        });

        it("Is returning 5 when adding 2 + 3", () => {
            assert.strictEqual(2 + 3, 5);  // Using strictEqual
        });

        it("Is returning 6 when multiplying 2 * 3", () => {
            assert.strictEqual(2 * 3, 6);  // Using strictEqual
        });
    });

    describe("Test2", () => {
        beforeEach(() => {
            console.log("executes before every test");
        });

        it("Is returning 5 when adding 2 + 3", () => {
            assert.strictEqual(2 + 3, 5);  // Using strictEqual
        });

        it("Is returning 8 when multiplying 2 * 4", () => {
            assert.strictEqual(2 * 4, 8);  // Using strictEqual
        });
    });
});
