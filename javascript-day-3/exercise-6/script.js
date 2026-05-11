function convertTemperature(value, unit) {
  if (unit === "C") {
    return (value * 9) / 5 + 32;
  } else if (unit === "F") {
    return ((value - 32) * 5) / 9;
  } else {
    return "Invalid Unit";
  }
}

console.log(convertTemperature(30, "C"));