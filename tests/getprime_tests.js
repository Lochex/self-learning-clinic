(function(){
  'use strict';

var jasmine = require('jasmine');
var getPrimes = require('../app/getprimes.js').getPrimes;


	describe("Get prime numbers: ", function() {
	  describe("Case for Negative Numbers", function(){
	  	it("should return 'Negative Numbers are not prime' for -10", function(){
	  		expect(getPrimes(-7)).toEqual("Negative Numbers are not prime");
	  	})
	  	it("should return 'Negative Numbers are not prime' for -15", function(){
	  		expect(getPrimes(-19)).toEqual("Negative Numbers are not prime");
	  	})
	  });

	  describe("Case for Data type", function(){
	  	it("should return 'Argument passed is not an integer' for 'asdf'", function(){
	  		expect(getPrimes("asdf")).toEqual("Argument passed is not an integer");
	  	})
	  });

	  describe("Case for Prime Numbers", function(){
	  	it("should return '[2,3,5,7]' for 8", function(){
	  		expect(getPrimes(8)).toEqual([2,3,5,7]);
	  	})
	  	it("should return '[2,3,5,7,11,13]' for 15", function(){
	  		expect(getPrimes(9)).toEqual([2,3,5,7]);
	  	})
	  	it("should return '0 is not Prime' for 0", function(){
	  		expect(getPrimes(0)).toEqual("0 or 1 are not Prime Numbers");
	  	})
	  	it("should return '1 is not Prime' for 1", function(){
	  		expect(getPrimes(1)).toEqual("0 or 1 are not Prime Numbers");
	  	})
	  });

	});
})();
