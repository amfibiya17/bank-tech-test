class BankAccount {
  constructor() {
    this.transactions = [];
  }

  putMoney(amount) {
    this.transactions.push(amount);
  }
}

module.exports = BankAccount;
