



 const checkFive = require('../checkFive.js');

describe("checkFive", function(){

   test("Checks to see if a number less than five returns the phrase ' is less than 5.'", function() {
        let output = checkFive(2);
        expect(output).toEqual("2 is less than 5.");
    });
    test("Checks to see if 5  returns the string'is equal to 5.'", function() {
        let output = checkFive(5);
        expect(output).toEqual("5 is equal to 5.");
    });
    test("Checks to see if a number greater than 5  returns the string'is greater than 5.'", function() {
        let output = checkFive(8);
        expect(output).toEqual("8 is greater than 5.");
    });

});