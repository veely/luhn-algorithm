var assert = require("chai").assert;
var validLuhn = require("../lib/luhn.js");

describe("Luhn Algorithm", function() {
  it("should return true if valid Luhn number", function() {
    var num = 79927398713;
    assert.isTrue(validLuhn(num));
  });

  it("should return false if NOT a valid Luhn number", function() {
    var num = 79927398715;
    assert.isFalse(validLuhn(num));
  });

});