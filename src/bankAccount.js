class BankAccount {
  constructor() {
    this.transactions = [];
  }

  putMoney(amount) {
    const transaction = {
      date: new Date(),
      credit: amount,
      debit: 0,
      balance: this.seeAccountBalance() + amount,
    };
    this.transactions.push(transaction);
    return this.seeAccountBalance();
  }

  seeAccountBalance() {
    return this.transactions.reduce(
      (subtotal, transaction) =>
        subtotal + transaction.credit - transaction.debit,
      0
    );
  }

  withdrawMoney(amount) {
    const transaction = {
      date: new Date(),
      credit: 0,
      debit: amount,
      balance: this.seeAccountBalance() + amount * -1,
    };

    if (transaction.balance < 0) {
      return `There are insufficient funds in your account. Please top up before proceeding. Available to withdraw ${this.seeAccountBalance()}.00.`;
    }

    this.transactions.push(transaction);
    return this.seeAccountBalance();
  }
}

module.exports = BankAccount;
