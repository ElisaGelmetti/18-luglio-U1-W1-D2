"use strict";
// creo una classe che gestisce le operazioni
class BankAccount {
    constructor() {
        this.balance = 0;
    }
    // deposito i soldi
    deposit(amount) {
        this.balance += amount;
    }
    // prelievo
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        }
        else {
            console.log("Saldo insufficiente.");
        }
    }
}
// creo la classe Sons
class SonsAccount extends BankAccount {
    constructor() {
        super();
    }
}
// creo la classo Mother
class MotherAccount extends BankAccount {
    constructor(interestRate) {
        super();
        this.interestRate = interestRate;
    }
    // interessi
    calculateInterest() {
        const interest = this.balance * (this.interestRate / 100);
        this.deposit(interest);
    }
}
// Utilizzo delle classi per eseguire operazioni sui conti correnti
const sonsAccount = new SonsAccount();
const motherAccount = new MotherAccount(5);
sonsAccount.deposit(1000);
sonsAccount.withdraw(200);
motherAccount.deposit(2000);
motherAccount.calculateInterest();
console.log("Saldo conto figlio:", sonsAccount.balance);
console.log("Saldo conto madre:", motherAccount.balance);
