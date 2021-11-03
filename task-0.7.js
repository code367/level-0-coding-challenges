function celsiusToFahrenheit(temp) {
  return temp * 1.8 + 32;
}

function fahrenheitToCelsius(temp) {
  return (temp - 32) * 0.5556;
}

console.log(celsiusToFahrenheit(44));
console.log(fahrenheitToCelsius(88));
