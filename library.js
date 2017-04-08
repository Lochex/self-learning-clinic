'use strict'

module.exports = {

 /* Find the average of three integers */
  fizzBuzz: function(num) {
    var a = "";
    if ((num % 3) === 0 || (num % 5) === 0) {
      if (num % 3 === 0) {
        a = "Fizz";
      }
      if (num % 5 === 0) {
        a += "Buzz";
      }
    }
    else {
      a = num;
    }
    return a;
  }

}
