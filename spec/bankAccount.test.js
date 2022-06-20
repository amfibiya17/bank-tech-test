const BankAccount = require('../src/bankAccount.js');

describe('BankAccount', () => {
  let bank;

  beforeEach(() => {
    bank = new BankAccount();
  });

  it('should be empty and has no transactions by default', () => {
    expect(bank.accountBalance).toEqual([]);
  });
});
