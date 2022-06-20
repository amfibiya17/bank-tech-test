class BankAccount {
  constructor() {
    this.transactions = [];
  }

  putMoney(amount) {
    const transaction = {
      date: new Date(),
      credit: 0,
      debit: amount,
      balance: this.seeAccountBalance() + amount,
    };
    this.transactions.push(transaction);
    return this.seeAccountBalance();
  }

  seeAccountBalance() {
    return this.transactions.reduce(
      (subtotal, transaction) =>
        subtotal + transaction.debit - transaction.credit,
      0
    );
  }

  withdrawMoney(amount) {
    const transaction = {
      date: new Date(),
      credit: amount,
      debit: 0,
      balance: this.seeAccountBalance() + amount * -1,
    };
    this.transactions.push(transaction);
    return this.seeAccountBalance();
  }
}

module.exports = BankAccount;

// nodemon check
const bank = new BankAccount();

console.log(bank.putMoney(5));
console.log(bank.putMoney(15));

console.log(bank.seeAccountBalance()); // <- 30

console.log(bank.withdrawMoney(2));
console.log(bank.withdrawMoney(2));
console.log(bank.seeAccountBalance()); // <- 26
console.log(bank); // <- 26
