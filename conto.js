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
    } else {
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

//SOLUZIONE
// var __extends =
//   (this && this.__extends) ||
//   (function () {
//     var extendStatics = function (d, b) {
//       extendStatics =
//         Object.setPrototypeOf ||
//         ({ __proto__: [] } instanceof Array &&
//           function (d, b) {
//             d.__proto__ = b;
//           }) ||
//         function (d, b) {
//           for (var p in b)
//             if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
//         };
//       return extendStatics(d, b);
//     };
//     return function (d, b) {
//       extendStatics(d, b);
//       function __() {
//         this.constructor = d;
//       }
//       d.prototype =
//         b === null
//           ? Object.create(b)
//           : ((__.prototype = b.prototype), new __());
//     };
//   })();
// var SonAccount = /** @class */ (function () {
//   function SonAccount(balanceInit) {
//     this.balanceInit = balanceInit;
//   }
//   SonAccount.prototype.deposit = function (amount) {
//     return amount;
//   };
//   SonAccount.prototype.oneWithdraw = function (amount) {
//     return amount;
//   };
//   SonAccount.prototype.twoWithdraw = function (amount) {
//     return amount;
//   };
//   SonAccount.prototype.totalBalance = function () {
//     return this.oneWithdraw(500) - this.twoWithdraw(400);
//   };
//   return SonAccount;
// })();
// console.log("------------son account----------------- " + "\n");
// var son = new SonAccount(0);
// console.log(son);
// console.log("deposit:+" + son.deposit(1000));
// console.log("withdraw:-" + son.oneWithdraw(500));
// console.log("withdraw:-" + son.twoWithdraw(400));
// console.log("totalBalance:" + son.totalBalance());
// var MotherAccount = /** @class */ (function (_super) {
//   __extends(MotherAccount, _super);
//   function MotherAccount(balanceInit) {
//     return _super.call(this, balanceInit) || this;
//   }
//   MotherAccount.prototype.deposit = function (amount) {
//     return amount;
//   };
//   MotherAccount.prototype.oneWithdraw = function (amount) {
//     return amount;
//   };
//   MotherAccount.prototype.twoWithdraw = function (amount) {
//     return amount;
//   };
//   MotherAccount.prototype.getBalance = function () {
//     return this.oneWithdraw(500) - this.twoWithdraw(400);
//   };
//   MotherAccount.prototype.addInterest = function (rate) {
//     return (this.getBalance() * rate) / 100;
//   };
//   MotherAccount.prototype.totalBalance = function () {
//     return this.getBalance() - this.addInterest(10);
//   };
//   return MotherAccount;
// })(SonAccount);
// var mother = new MotherAccount(0);
// console.log(
//   "--------------mother account----------------------------------" + "\n"
// );
// console.log(mother);
// console.log("deposit:+" + mother.deposit(1000));
// console.log("withdraw:-" + mother.oneWithdraw(500));
// console.log("withdraw:-" + mother.twoWithdraw(400));
// console.log("totalBalance:" + mother.totalBalance());
