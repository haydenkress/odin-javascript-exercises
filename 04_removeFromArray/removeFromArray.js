const removeFromArray = function() {
    let array = Array.from(arguments[0]);
    let itemsToRemove = Array.from(arguments).slice(1);
    let newArray = [];
    
    for (let i = 0; i < array.length; i++) {
        if (!itemsToRemove.includes(array[i])) {
            newArray.push(array[i]);
        }
    } 
    return newArray;
};
console.log(removeFromArray([1, 2, 3, 4]), 1);

// Do not edit below this line
module.exports = removeFromArray;
