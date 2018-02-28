// import chai, declare expect variable
const expect = require('chai').expect;

// import fizzBuzzer
const fizzBuzzer = require('../fizzBuzzer');

// unit tests for our `fizzBuzzer` function
describe('fizzBuzzer', function() {

  // test the normal case
  it('should return correct response', function() {
    // range of normal inputs, including
    // notable cases like negative answers
    const normalCases = [
      {num: 30, expected: 'fizz-buzz'},
      {num: 9, expected: 'fizz'},
      {num: 10, expected: 'buzz'},
      {num: -9, expected: 'fizz'},
      {num: 4, expected: 4}
    ];
    // for each input, `fizzBuzzer` should
    // produce the expected value
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      expect(answer).to.equal(input.expected);
    });
  });

  it('should raise error if arg is not a number', function() {
    // range of bad inputs where not both are numbers
    const badInputs = ['a','1', false]
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      expect(function() {
        fizzBuzzer(input);
      }).to.throw(Error);
    });
  });
});