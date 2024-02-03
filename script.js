function toFahrenheit(celsius) {
  if (celsius < -273.15 || celsius > 1.8 * Math.pow(10, 9)) {
    // Check if the input temperature is within the valid range
    return "Invalid input temperature";
  }

  // Convert Celsius to Fahrenheit using the formula: (Celsius * 9/5) + 32
  const fahrenheit = (celsius * 9/5) + 32;

  // Round the result to two decimal places
  return fahrenheit.toFixed(2);
}

// Example usage:
const celsius = prompt("Enter Celsius:");
alert(toFahrenheit(Number(celsius)));
