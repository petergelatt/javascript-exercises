const repeatString = function(string, num) {
    let loopNumber = 0;
    let stringNumber = "";
    if (num < 0) {
      return "ERROR";
    }
    while (loopNumber < num) {
      stringNumber += string;
      loopNumber++;
    }
    return stringNumber;
};

// Do not edit below this line
module.exports = repeatString;
