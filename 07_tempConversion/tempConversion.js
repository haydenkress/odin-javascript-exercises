const convertToCelsius = function(degrees) {
  let calculation = (Number(degrees) - 32) * (5 / 9);
  let celsius;
  if (calculation === 0) {
    celsius = Number(calculation.toFixed(0));
  }
  else {
    celsius = Number(calculation.toFixed(1));
  }
  
  return celsius;
};

const convertToFahrenheit = function(degrees) {
  let calculation = Number(degrees) * (9 / 5) + 32;
  let fahrenheit;
  let freezing = calculation.toString().startsWith("32");

  if (calculation === 0) {
    fahrenheit = Number(calculation.toFixed(0));
  } 
  else if (freezing == true) {
    fahrenheit = 32;
  } 
  else {
    fahrenheit = Number(calculation.toFixed(1));
  }
  
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
