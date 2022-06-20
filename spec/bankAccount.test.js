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

  describe('seeAccountBalance function', () => {
    it('should return account balance as integer', () => {
      bankAccount.putMoney(10);
      bankAccount.putMoney(5);
      bankAccount.transactions = [10, 5];

      expect(bankAccount.seeAccountBalance()).toEqual(15);
    });
  });

  describe('withdrawMoney function', () => {
    it('should withdraw money from account balance', () => {
      bankAccount.putMoney(10);
      bankAccount.putMoney(5);
      bankAccount.seeAccountBalance(15);
      bankAccount.withdrawMoney(2);

      expect(bankAccount.seeAccountBalance()).toEqual(13);
    });
  });
});
