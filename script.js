// creat a bankaccount in javascript using object-oriented programming principle. the calss should have methodes for depositing, withdrawing and checking the account balance . ensure that account balance cannot go below zero and that both depposite and withdrawal amount must be positive.
class BankAccount {
    constructor(owner, initialBalance) {
      this.owner = owner;
      this.balance = initialBalance > 0 ? initialBalance : 0;
    }
  
    deposit(amount) {
      if (amount > 0) {
        this.balance += amount;
        console.log(`${this.owner} deposited $${amount}. New balance: $${this.balance}`);
      } else {
        console.log("Deposit amount must be positive.");
      }
    }
  
    withdraw(amount) {
      if (amount > 0) {
        if (amount <= this.balance) {
          this.balance -= amount;
          console.log(`${this.owner} withdrew $${amount}. New balance: $${this.balance}`);
        } else {
          console.log("Insufficient balance for this withdrawal.");
        }
      } else {
        console.log("Withdrawal amount must be positive.");
      }
    }
  
    checkBalance() {
      console.log(`${this.owner} has a balance of $${this.balance}.`);
    }
  }
  

  const myAccount = new BankAccount("Mithun $", 1000);
  
  myAccount.checkBalance();
  
  myAccount.deposit(500);
  myAccount.deposit(-50);
  
  myAccount.withdraw(200);
  myAccount.withdraw(1500);
  myAccount.withdraw(-500);
  
  myAccount.checkBalance();
  