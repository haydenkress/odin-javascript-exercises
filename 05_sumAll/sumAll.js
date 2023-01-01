const sumAll = function() {
    let number = arguments[0];
    let endingNum = arguments[1];
    if (!Number.isInteger(number) || !Number.isInteger(endingNum)) return "ERROR";
    if (number < 0 || endingNum < 0) return "ERROR";
    if (number > endingNum) {
        const temp = number;
        number = endingNum;
        endingNum = temp;
      }
    let sum = 0;
    for (let i = number; i <= endingNum; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
