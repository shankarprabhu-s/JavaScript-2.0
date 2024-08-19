class Bank {
	#balance;
	constructor() {
		this.#balance = 0;
	}
	addMoney(amt) {
		this.#balance += amt;
	}
	withdraw(amt) {
		if (amt > this.#balance) {
			console.log(`not enough balance`);
			return;
		}
		this.#balance -= amt;
	}
	showBalance() {
		return this.#balance;
	}
}

const bank1 = new Bank();
bank1.addMoney(500);
console.log(bank1.showBalance());
bank1.withdraw(900)
