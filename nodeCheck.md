## nodemon check

```javascript
const { Printer, timeFormatter, getValue } = require('./src/printer.js');
const BankAccount = require('./src/bankAccount.js');

const bank = new BankAccount();
const printer = new Printer(bank);

console.log(bank.putMoney(5));
console.log(bank.putMoney(15));

console.log(bank.seeAccountBalance());

console.log(bank.withdrawMoney(2));
console.log(bank.withdrawMoney(2));
console.log(bank.seeAccountBalance());

console.log(printer.bankAccountSummary());
```
