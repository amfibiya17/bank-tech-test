const timekeeper = require('timekeeper');

const { Printer, timeFormatter, getValue } = require('../src/printer.js');
const BankAccount = require('../src/bankAccount.js');
const { time } = require('console');

describe('Printer', () => {
  let bankAccount;
  let printer;

  beforeAll(() => {
    timekeeper.freeze(new Date('2022-01-14'));
  });
  afterAll(() => {
    timekeeper.reset();
  });

  beforeEach(() => {
    bankAccount = new BankAccount();
    printer = new Printer(bankAccount);
  });

  describe('bankStatementSummary', () => {
    it('should display several transactions and print the bank statement summary in reverse chronological order', () => {
      timekeeper.freeze(new Date('2022-01-10'));
      bankAccount.putMoney(10);
      timekeeper.freeze(new Date('2022-01-12'));
      bankAccount.putMoney(5);
      timekeeper.freeze(new Date('2022-01-13'));
      bankAccount.withdrawMoney(2);
      timekeeper.reset();

      expect(printer.bankAccountSummary()).toEqual(
        'date || credit || debit || balance\n' +
          '13/01/2022 ||  || 2.00 || 13.00\n' +
          '12/01/2022 || 5.00 ||  || 15.00\n' +
          '10/01/2022 || 10.00 ||  || 10.00'
      );
    });
  });
});

describe('timeFormatter', () => {
  it('should display date in the right format', () => {
    const date = new Date('2022-01-10');

    expect(timeFormatter(date)).toEqual('10/01/2022');
  });
});

describe('getValue', () => {
  it('should return an empty string if value = 0', () => {
    value = 0;

    expect(getValue(value)).toEqual('');
  });
});
