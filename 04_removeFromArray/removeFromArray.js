function removeFromArray(array, ...values) {
    let newArray = array.filter(item => !values.includes(item));
    return newArray
}
console.log(removeFromArray([1,2,3,"hey"], 2,"hey"))

// Do not edit below this line
module.exports = removeFromArray;
