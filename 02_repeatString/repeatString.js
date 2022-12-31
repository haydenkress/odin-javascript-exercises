const repeatString = function(string, number) {
    let concatString = '';
    if (number < 0) {
        return 'ERROR';
    }
    for (let i = 0; i < number; i++) { 
        concatString += String(string);
    }
    return concatString;
};
console.log(repeatString('hey', 3));

// Do not edit below this line
module.exports = repeatString;