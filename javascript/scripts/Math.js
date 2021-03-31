class math {
  // todo: Make a function that can calculate factorial of a number
  // ?status: Done

  /**
   * @description A factorial is a function that multiplies a number by every number below it. For example `factorial(5)` : `5 x 4 x 3 x 2 x 1 = 120`. The function is used, among other things, to find the number of way “n” objects can be arranged
   * @param {Number} number Pass an Integer number to factorial that
   * @returns {Number} Integer Number
   */

  static factorial(number) {
    let finalResult = 1;
    for (let i = 1; i <= number; i++) {
      finalResult *= i;
    }
    return finalResult;
  }

  // todo: Make a function that returns if the number is prime or not
  // ?status: Done

  /**
   * @description Prime number is a number that is divisible only by itself and 1 (e.g. 2, 3, 5, 7, 11).
   * @param {Number} number Enter an number greater then 2
   * @returns {Boolean} `true` or `false`
   */

  static isPrime(number = 0) {
    for (let i = 2; i < number; i++) if (number % i === 0) return false;
    return number > 1;
  }

  static isOdd(number = 0) {
    return number % 2 !== 0;
  }

  static isEven(number = 0) {
    return number % 2 === 0;
  }

  static isDived(number1, number2, strict = true) {
    if (strict) return number1 % number2 === 0;
    else
      return number1 > number2
        ? number1 % number2 === 0
        : number2 % number1 === 0;
  }

  static getPrimeDivisor(number = 0) {
    if (number > 1) {
      let finalArray = [];
      let divisor = 2;
      let result = number;
      while (result !== 1) {
        if (result % divisor === 0) {
          finalArray.push(divisor);
          result /= divisor;
        } else {
          divisor++;
          while (!this.isPrime(divisor)) {
            divisor++;
          }
        }
      }

      return finalArray;
    } else {
      // console.error("Please enter a number greater then 1");
      return null;
    }
  }

  static sum(... data) {
    return data.reduce((p,c) => p + c);
  }

  static quotient(...data) {
    return data.reduce((p,c) => p / c);
  }

  static product(...data) {
    return data.reduce((p,c) => p * c);
  }

  static difference(...data) {
    return data.reduce((p,c) => p - c);
  }
}

// exporting
exports.math = math;
