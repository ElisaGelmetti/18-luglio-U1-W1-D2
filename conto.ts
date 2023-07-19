// creo una classe che gestisce le operazioni

class BankAccount {
  protected balance: number;

  constructor() {
    this.balance = 0;
  }
  // deposito i soldi
  deposit(amount: number) {
    this.balance += amount;
  }
  // prelievo
  withdraw(amount: number) {
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
  private interestRate: number;

  constructor(interestRate: number) {
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
// deposito del figlio
sonsAccount.deposit(1000);
// prelievo del figlio
sonsAccount.withdraw(200);
// deposito della madre
motherAccount.deposit(2000);
// calcolo gli interessi
motherAccount.calculateInterest();

console.log("Saldo conto figlio:", sonsAccount.balance);
console.log("Saldo conto madre:", motherAccount.balance);

//SOLUZIONE

// class SonAccount {
//   // nome della classe

//   balanceInit: number; // proprietà di classe

//   constructor(balanceInit: number) {
//     // costruttore della classe che referenzia la proprietà balanceInit

//     this.balanceInit = balanceInit;
//   }
//   // implementazione del metodo deposit
//   public deposit(amount: number): number {
//     return amount;
//   }

//   // implementazione del metodo oneWithdraw
//   public oneWithdraw(amount: number): number {
//     return amount;
//   }

//   // implementazione del metodo twoWithdraw
//   public twoWithdraw(amount: number): number {
//     return amount;
//   }

//   // implementazione del metodo totalBalance
//   public totalBalance(): number {
//     return this.oneWithdraw(500) - this.twoWithdraw(400);
//   }
// }
// console.log("------------son account----------------- " + "\n");

// // set della proprietà al costruttore
// let son = new SonAccount(0);
// console.log(son);

// // stampo i versamenti-prelievi fatti ed il saldo attuale del conto
// console.log("deposit:+" + son.deposit(1000));
// console.log("withdraw:-" + son.oneWithdraw(500));
// console.log("withdraw:-" + son.twoWithdraw(400));
// console.log("totalBalance:" + son.totalBalance());

// // classe MotherAccount estende SonAccount
// class MotherAccount extends SonAccount {
//   //costruttore referenzia la proprietà
//   constructor(balanceInit: number) {
//     super(balanceInit);
//   }

//   public deposit(amount: number): number {
//     return amount;
//   }

//   public oneWithdraw(amount: number): number {
//     return amount;
//   }

//   public twoWithdraw(amount: number): number {
//     return amount;
//   }

//   public getBalance(): number {
//     return this.oneWithdraw(500) - this.twoWithdraw(400);
//   }

//   // implementazione del metodo addInterest
//   public addInterest(rate: number): number {
//     return (this.getBalance() * rate) / 100;
//   }

//   // implementazione del metodo totalBalance
//   public totalBalance(): number {
//     return this.getBalance() - this.addInterest(10);
//   }
// }

// let mother = new MotherAccount(0);
// console.log(
//   "--------------mother account----------------------------------" + "\n"
// );
// console.log(mother);
// // stampo i versamenti-prelievi fatti ed il saldo attuale del conto
// console.log("deposit:+" + mother.deposit(1000));
// console.log("withdraw:-" + mother.oneWithdraw(500));
// console.log("withdraw:-" + mother.twoWithdraw(400));
// console.log("totalBalance:" + mother.totalBalance());
