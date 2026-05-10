function calculateBMI (weight,height){
    const bmi = weight / (height * height);
    if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi < 25) {
    return "Normal";
  } else {
    return "Overweight";
  }
}
console.log(calculateBMI(125,1.75));