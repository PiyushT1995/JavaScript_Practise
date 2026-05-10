const amount = 5000;
let discount  = 0;
if(amount>=5000){
     discount = 20;
}else if(amount>=2000){
     discount =10;
}

const finalAmount = amount - (amount * discount/100);

console.log(`Amount: ${amount}`);
console.log(`Discount: ${discount}%`);
console.log(`Final Amount: ${finalAmount}`);