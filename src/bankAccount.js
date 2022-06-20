class BankAccount {
  constructor() {
    this.transactions = [];
  }

  putMoney(amount) {
    this.transactions.push(amount);
  }

  seeAccountBalance() {
    return this.transactions.reduce((a, b) => a + b);
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
