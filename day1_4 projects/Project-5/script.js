const account = {
    name : "Piyush",
    accountNumber : 123456,
    balance : 10000,
    transaction :[]
}

function deposit(amount){

    account.balance = account.balance + amount;
    account.transaction.push(`Deposit:${amount}`);

    console.log(`
      Deposited:${amount}
      Total Balance:${account.balance}`)

}
function withdraw(amount){
    if (account.balance<amount){
         console.log("Insufficient Balance");
         return;
    }
    
    account.balance = account.balance - amount;
    account.transaction.push(`WithDraw:${amount}`);

    console.log(`
        Withdraw:${amount}
        Total Balance:${account.balance}`);
}
deposit(5000);
withdraw(5000);
console.log(account.transaction);