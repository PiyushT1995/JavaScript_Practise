const number = 15;
if(number%3 === 0 && number%5 ===0){
    console.log("divisible by both");
}else if (number%3 === 0){
    console.log("divisible by by 3");
}else if (number%5 === 0){
    console.log("divisible by 5")
}else {
    console.log("Not divisible both 3 and 5");
}