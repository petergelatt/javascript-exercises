
const sumAll = function(initValue, endValue) {
    let finalValue = 0;

    if (typeof initValue !== typeof endValue || initValue < 0 ||  endValue < 0 ) {
        return "ERROR";
      }
    else if (initValue <= endValue) {
      for (let i = initValue; i <= endValue; i++) {
        finalValue += i;
      }
    }
    else if (initValue >= endValue) {
      for (let i = endValue; i <= initValue; i++) {
        finalValue += i;
      }
    } 
  
    return finalValue;
  };
  console.log(sumAll(1,4));
// Do not edit below this line
module.exports = sumAll;

