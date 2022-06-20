const timekeeper = require('timekeeper');

const BankAccount = require('../src/bankAccount.js');

describe('BankAccount', () => {
  let bankAccount;

  beforeAll(() => {
    timekeeper.freeze(new Date('2022-01-14'));
  });
  afterAll(() => {
    timekeeper.reset();
  });

  beforeEach(() => {
    bankAccount = new BankAccount();
  });

  it('should be empty and has no transactions by default', () => {
    expect(bankAccount.transactions).toEqual([]);
  });

  describe('putMoney function', () => {
    it('should put money to transactions array with the time transaction was made', () => {
      bankAccount.putMoney(10);

      expect(bankAccount.transactions).toEqual([
        {
          date: new Date(),
          credit: 10,
          debit: 0,
          balance: 10,
        },
      ]);
    });
  });

  describe('seeAccountBalance function', () => {
    it('should return account balance', () => {
      bankAccount.putMoney(10);
      bankAccount.putMoney(5);
      bankAccount.withdrawMoney(2);
      bankAccount.transactions = [
        {
          date: new Date(),
          credit: 5,
          debit: 0,
          balance: 5,
        },
        {
          date: new Date(),
          credit: 10,
          debit: 0,
          balance: 15,
        },
        {
          date: new Date(),
          credit: 0,
          debit: 2,
          balance: 13,
        },
      ];

      expect(bankAccount.seeAccountBalance()).toEqual(13);
    });
  });

  describe('withdrawMoney function', () => {
    it('should withdraw money from account balance with the time transaction was made', () => {
      bankAccount.putMoney(10);
      bankAccount.withdrawMoney(2);

      expect(bankAccount.transactions).toEqual([
        {
          date: new Date(),
          credit: 10,
          debit: 0,
          balance: 10,
        },
        {
          date: new Date(),
          credit: 0,
          debit: 2,
          balance: 8,
        },
      ]);
    });
  });
});
