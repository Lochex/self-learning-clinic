'use strict'

module.exports = {

	getPrimes: function(n) {
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