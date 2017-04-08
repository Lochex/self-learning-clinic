'use strict'

module.exports = {

 /* Find the average of three integers */
  aritGeo: function(arr) {
    let test = "";
    if (arr.length > 0) {
      for (var i = 0; i < arr.length - 2; i++) {
        if ((arr[i + 1] - arr[i]) == (arr[i + 2] - arr[i + 1])) {
          test = "Arithmetic"
        }
        else if ((arr[i + 1] / arr[i]) == (arr[i + 2] / arr[i + 1])) {
          test = "Geometric"
        }  
        else {
            test = -1
        }
      }
    }
    else {
      test = 0
    }
    return test
  }

}