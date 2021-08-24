// this is the forecast in kelvin
const kelvin = 293;
//this is the forecast in celsius, which is 273 less than that in kelvin
var celsius = kelvin - 273;
//this is the forecast in fahrein
let fahrenheit = celsius*(9/5)+32;
//this is the floor value of the forecast in fahrenheit
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);