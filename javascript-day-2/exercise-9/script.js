const weight = 125;
const height = 1.79;

const bmi = weight /(height * height);
console.log(bmi);

if (bmi<18){
    console.log("Underweight");
}else if(bmi<25){
    console.log("Normal");
}else{
    console.log("Overweight");
}