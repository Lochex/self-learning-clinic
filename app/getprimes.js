'use strict'

module.exports = {

	getPrimes: function(n) {
		if (typeof(n) === 'string') {
			return "Argument passed is not an integer";
		} else if (n < 0) {
			return "Negative Numbers are not prime";
		} else if ((n === 0) || (n === 1)) {
			return "0 or 1 are not Prime Numbers"
		}
			var prm = [];
			for (var num = 0; num <= n; num++) {
				var found = false;
				if (num > 1) {
					for (var i = 2; i <= Math.floor(Math.pow(num,0.5)); i++) {
						if (num % i === 0) {
							found = true;
							break;
						}
					}
					if (found === false) {
						prm.push(num);
					}
				}
				
			}
			return prm;
	}

}