function calculateDiscount(amount) {
  let discount = 0;

  if (amount >= 5000) {
    discount = amount * 0.20;
  } else if (amount >= 2000) {
    discount = amount * 0.10;
  }

  return amount - discount;
}

console.log(calculateDiscount(6000));