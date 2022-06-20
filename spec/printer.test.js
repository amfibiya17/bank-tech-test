const timekeeper = require('timekeeper');

const { Printer, timeFormatter, getValue } = require('../src/printer.js');
const BankAccount = require('../src/bankAccount.js');

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