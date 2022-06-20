const BankAccount = require('../src/bankAccount.js');

describe('BankAccount', () => {
  let bankAccount;

  beforeEach(() => {
    bankAccount = new BankAccount();
  });

  it('should be empty and has no transactions by default', () => {
    expect(bankAccount.transactions).toEqual([]);
  });

  describe('putMoney function', () => {
    it('should put money to transactions array', () => {
      bankAccount.putMoney(10);
      bankAccount.putMoney(5);
      expect(bankAccount.transactions).toEqual([10, 5]);
    });
  });
});
