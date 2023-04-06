const convertToCelsius = function(farNum) {
  let convertedNum = ((farNum - 32) * (5/9));
  let roundedNum = convertedNum.toFixed(1);
    return Number(roundedNum)
};

const convertToFahrenheit = function(celNum) {
  let convertedNum = ((celNum * (9/5)) + 32);
  let roundedNum = convertedNum.toFixed(1);
  
    return Number(roundedNum)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
