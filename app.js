function BankAccount(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;

    this.deposit = function (amount) {
        this.balance += amount;
    };

    this.withdraw = function (amount) {
        this.balance -= amount;
    };
}

var accounts = [];

//Create Account
const Create = document.querySelector('#Create');
const customerName = document.querySelector('#customerName');
const balance = document.querySelector('#balance');

Create.addEventListener('submit', (e) => {
    e.preventDefault();
    let account = new BankAccount(customerName.value, +balance.value);
    accounts.push(account);
    console.log(accounts);
});

//Deposit in Account

const Deposit = document.querySelector('#Deposit');
const accountNumber = document.querySelector('#accountNumber');
const amount = document.querySelector('#amount');

Deposit.addEventListener('submit', (e) => {
    e.preventDefault();
    let account = accounts.find((account) => account.accountNumber === +accountNumber.value);
    account.deposit(+amount.value);
    console.log(accounts);
});

//Withdraw from Account

const Withdraw = document.querySelector('#Withdraw');
const accountNumber2 = document.querySelector('#accountNumber2');
const amount2 = document.querySelector('#amount2');

Withdraw.addEventListener('submit', (e) => {
    e.preventDefault();
    let account = accounts.find((account) => account.accountNumber === +accountNumber2.value);
    account.withdraw(+amount2.value);
    console.log(accounts);
});
