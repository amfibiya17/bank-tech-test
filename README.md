Bank Tech Test
===================

- this program is able to interact with the code via a REPL (Node)
- this program allows the user to make a deposit to their bank account
- this program allows the user to withdraw money from their bank account
- this program prints users bank statement
- this program prints statements in reverse chronological order
- this program allows bank statement to include users bank balance

---

## How to install the program

- Clone this repository 
```
git clone https://github.com/amfibiya17/bank-tech-test.git
```

- Install dependencies
```
cd bankTechTest
npm install
```

---

## How to run the program

```
node
```
![node](https://i.postimg.cc/zvvHYTXy/Screenshot-2022-06-21-at-10-31-59.png)

---

## Test Coverage
![test coverage](https://i.postimg.cc/ZYGMRHpF/Screenshot-2022-06-21-at-10-24-22.png)

---

## Project Structure
The folder structure of this program is explained below:

| Name | Description |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **node_modules**         | Contains all  npm dependencies |
| **src**                  | Contains  source code that will be compiled to the dist dir |
| **spec**         | Contains all the test files |
| **package.json**             | Contains npm dependencies |
| **nodeCheck.md**             | Contains a list of node commands which can be used to manually test the program |
---

## User Stories

```
As a client
So I can manage my personal finances
I want bank account
```

```
As a client
So I can add money to my bank account
I want to make a deposit to my account
```

```
As a client
So I can take money out of my bank account
I want to make a withdrawal to my account
```

```
As a client
So I can see a history of my transactions
I want to print my bank statement
```

```
As a client
So I can see the most recent transactions first
I want the statements to be listed in reverse chronological order
```

```
As a client
So I can see how much money I have in my account
I want my bank statement to include my bank balance
```
---

## Diagram
![diagram](https://i.postimg.cc/3NV9D8kx/Screenshot-2022-06-21-at-10-20-13.png)

---

## Trello

https://trello.com/b/8NzhNdDD/bank-tech-test


---


## Specification (Provided)
---

### Requirements

- You should be able to interact with your code via a REPL like IRB or the JavaScript console. (You don't need to implement a command line interface that takes input from STDIN.)
- Deposits, withdrawal.
- Account statement (date, amount, balance) printing.
- Data can be kept in memory (it doesn't need to be stored to a database or anything).

---

### Acceptance criteria

`Given` a client makes a deposit of 1000 on 10-01-2023  
`And` a deposit of 2000 on 13-01-2023  
`And` a withdrawal of 500 on 14-01-2023  
`When` she prints her bank statement  
`Then` she would see

| Date | Credit | Debit | Balance |
| ---- | ------ | ----- | ------- |
| 14/01/2023 | | 500.00 | 2500.00 |
| 13/01/2023 | 2000.00 | | 3000.00 |
| 10/01/2023 | 1000.00 | | 1000.00 |

---
