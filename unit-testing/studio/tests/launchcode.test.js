// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){
  test('checks that the keys match the values',function(){
    expect(launchcode.organization).toBe("nonprofit");
    expect(launchcode.executiveDirector).toBe("Jeff");
    expect(launchcode.percentageCoolEmployees).toBe(100);
  });
test("checks the array entries and length", function(){
  expect(launchcode.programsOffered.includes("Web Development")).toBe(true)
  expect(launchcode.programsOffered.includes("Data Analysis")).toBe(true)
  expect(launchcode.programsOffered.includes("Liftoff")).toBe(true)
  expect(launchcode.programsOffered.length).toBe(3);

});
test("checks that the function returns the correct string for a given input", function(){
  expect(launchcode.launchOutput(2)).toBe("Launch!")
  expect(launchcode.launchOutput(3)).toBe("Code!")
  expect(launchcode.launchOutput(5)).toBe("Rocks!")
})

  
  
  // Write your unit tests here!
});