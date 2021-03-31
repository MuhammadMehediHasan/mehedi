class array {
  /**
   * @description A python style range function. Especially for python lovers
   * @param {Number} a Enter the first number
   * @param {Number} b Enter the last number
   * @returns {Array}
   */
  static range(a, b) {
    
    if(a === b) return [a];

    let finalArray = [];
    for (a; a >= b; a--) {
      finalArray.push(a);
    }
    for (b; b >= a; a++) {
      finalArray.push(a);
    }
    return finalArray;
  }

  /**
   * @param {Array} array
   * @returns {Boolean}
   */

  static empty(data) {
    return data.length === 0;
  }

  /**
   * @param {Array} array
   * @returns {Array} Number
   */
  static reverse(...data) {
    let finalData = [];
    for (let i = data.length - 1; i >= 0; i--) {
      finalData.push(data[i]);
    }

    return finalData;
  }
}

// Exports

exports.array = array;
