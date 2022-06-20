class BankAccount {
  constructor() {
    this.transactions = [];
  }

  putMoney(amount) {
    this.transactions.push(amount);
    return this.seeAccountBalance();
  }

  seeAccountBalance() {
    return this.transactions.reduce((a, b) => a + b);
  }

  withdrawMoney(amount) {
    this.transactions.push(amount * -1);
    return this.seeAccountBalance();
  }
}

module.exports = BankAccount;

// nodemon check
const bank = new BankAccount();
console.log(bank);

console.log(bank.putMoney(5));
console.log(bank.putMoney(15));
console.log(bank.putMoney(10));

console.log(bank);
console.log(bank.seeAccountBalance());

console.log(bank.withdrawMoney(2));
console.log(bank.seeAccountBalance());
console.log(bank);
