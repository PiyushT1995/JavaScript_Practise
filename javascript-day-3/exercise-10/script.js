function withdraw(balance, withdrawAmount) {
  if (withdrawAmount > balance) {
    return "Insufficient Balance";
  }

  return balance - withdrawAmount;
}

console.log(withdraw(5000, 2000));