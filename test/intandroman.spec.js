const chai = require('../node_modules/chai')
const convertor = require('../intandroman')
const intToRoman = convertor.intToRoman
const romanToInt = convertor.romanToInt
const expect = chai.expect

describe('intToRoman()', () => {
  it('Should return "IV" to 4', function() {
    expect(intToRoman(4)).to.equal("IV")
  })

  it('Should return "DLXXXIX" to 589', function() {
    expect(intToRoman(589)).to.equal("DLXXXIX")
  })

  it('Should return "MMM" to 3000', function() {
    expect(intToRoman(3000)).to.equal("MMM")
  })

  it('Should return "Function called with no value" to ""', () =>{
    var badFn = function () { intToRoman("") };
    expect(badFn).to.throw('Function called with no value');
  });

  it('Should return "Type only numbers" to "1998"', () =>{
    var badFn = function () { intToRoman("1998") };
    expect(badFn).to.throw('Type only numbers');
  });
})

describe('romanToInt()', () => {
  it('Should return 11 to "XI"', function() {
    expect(romanToInt("XI")).to.equal(11)
  })

  it('Should return 728 to "DCCXXVIII"', function() {
    expect(romanToInt("DCCXXVIII")).to.equal(728)
  })

  it('Should return 2576 to "MMDLXXVI"', function() {
    expect(romanToInt("MMDLXXVI")).to.equal(2576)
  })

  it('Should return "Function called with no value" to ""', () =>{
    var badFn = function () { romanToInt("") };
    expect(badFn).to.throw('Function called with no value');
  });

  it('Should return "Is not a valid roman number" to "1998"', () =>{
    var badFn = function () { romanToInt("1998") };
    expect(badFn).to.throw("Is not a valid roman number");
  });

  it('Should return "Is not a valid roman number" to "BXL"', () =>{
    var badFn = function () { romanToInt("BXL") };
    expect(badFn).to.throw("Is not a valid roman number");
  });

  it('Should return "Type a string" to 5', () =>{
    var badFn = function () { romanToInt(5) };
    expect(badFn).to.throw("Type a string");
  });
})