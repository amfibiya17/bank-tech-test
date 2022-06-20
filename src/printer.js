class Printer {
  constructor(bankAccount) {
    this.bankAccount = bankAccount;
  }

  bankAccountSummary() {
    const transactions = [...this.bankAccount.transactions];
    transactions.reverse();
    const transactionLine = transactions.map(
      ({ date, credit, debit, balance }) =>
        `${timeFormatter(date)} || ${getValue(credit)} || ${getValue(
          debit
        )} || ${balance.toFixed(2)}`
    );

    return `date || credit || debit || balance\n${transactionLine.join('\n')}`;
  }
}

function timeFormatter(date) {
  const currDate = date.getDate().toString().padStart(2, '0');
  const currMonth = (date.getMonth() + 1).toString().padStart(2, '0');
  const currYear = date.getFullYear();
  return `${currDate}/${currMonth}/${currYear}`;
}

function getValue(value) {
  if (value === 0) {
    return '';
  }
  return value.toFixed(2);
}

module.exports = { Printer, timeFormatter, getValue };
