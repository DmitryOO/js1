'use strict';
let startBtn = document.getElementById('start'),
	budgetValue = document.querySelector('.budget-value'),
	dayBudgetValue = document.querySelector('.daybudget-value'),
	levelValue = document.querySelector('.level-value'),
	expensesValue = document.querySelector('.expenses-value'),
	optionalExpensesValue = document.querySelector('.optionalexpenses-value'),
	incomeValue = document.querySelector('.income-value'),
	monthSavingsValue = document.querySelector('.monthsavings-value'),
	yearSavingsValue = document.querySelector('.yearsavings-value'),
	expensesItems = document.querySelectorAll('.expenses-item'),
	expensesItemBtn = document.querySelector('.expenses-item-btn'),
	optionalExpensesBtn = document.querySelector('.optionalexpenses-btn'),
	countBudgetBtn = document.querySelector('.count-budget-btn'),
	optionalExpensesItems = document.querySelectorAll('.optionalexpenses-item'),
	choosenIncome = document.querySelector('.choose-income'),
	savings = document.querySelector('#savings'),
	sum = document.querySelector('#sum'),
	percent = document.querySelector('#percent'),
	yearValue = document.querySelector('.year-value'),
	monthValue = document.querySelector('.month-value'),
	dayValue = document.querySelector('.day-value');

let money, time;

optionalExpensesBtn.setAttribute('disabled', 'disabled');
expensesItemBtn.setAttribute('disabled', 'disabled');
countBudgetBtn.setAttribute('disabled', 'disabled');

startBtn.addEventListener('click', function () {
	optionalExpensesBtn.removeAttribute('disabled');
	expensesItemBtn.removeAttribute('disabled');
	countBudgetBtn.removeAttribute('disabled');

	time = prompt("Введите дату в формате YYYY-MM-DD", "");
	money = +prompt("Ваш бюджет на месяц?", "");

	while (isNaN(money) || money == "" || money == null) {
		money = +prompt("Ваш бюджет на месяц?", "");
	}

	appData.budget = money;
	appData.timeData = time;
	budgetValue.textContent = money.toFixed();
	yearValue.value = new Date(Date.parse(time)).getFullYear();
	monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
	dayValue.value = new Date(Date.parse(time)).getDate();
});

expensesItemBtn.addEventListener("click", function () {
	let sum = 0;

	for (let i = 0; i < expensesItems.length; i = i + 2) {
		let a = expensesItems[i].value,
			b = expensesItems[i + 1].value;

		if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != "" && b != "" && a.length < 50) {

			console.log("done");

			appData.expenses[a] = b;
			sum += +b;
		} else {
			console.log("bad result");
			i--;
		}
	}
	expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function () {
	for (let i = 0; i < optionalExpensesItems.length; i++) {
		let opt = optionalExpensesItems[i].value;
		appData.optionalExpenses[i] = opt;
		optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
	}
});

countBudgetBtn.addEventListener('click', function () {
	if (appData.budget !== undefined) {
		appData.moneyPerDay = ((appData.budget - +expensesValue.textContent) / 30).toFixed();
		dayBudgetValue.textContent = appData.moneyPerDay;
		let countBudjet =function() {
			if (expensesItems.length > 0) {
				
			}
		};
		if (appData.moneyPerDay < 100) {
			levelValue.textContent = "Это минимальный уровень достатка!";
		} else if (appData.moneyPerDay >= 100 && appData.moneyPerDay <= 2000) {
			levelValue.textContent = "Это средний уровень достатка!";
		} else if (appData.moneyPerDay > 2000) {
			levelValue.textContent = "Это высокий уровень достатка!";
		} else {
			levelValue.textContent = "Ошибочка...!";
		}
	} else {
		levelValue.textContent = "Произошла Ошибочка...!";
	}
});

choosenIncome.addEventListener('input', function () {
	let items = choosenIncome.value;
	appData.income = items.split(", ");
	incomeValue.textContent = appData.income;
});

savings.addEventListener('click', function () {
	if (appData.savings === true) {
		appData.savings = false;
	} else {
		appData.savings = true;
	}
});

function countSavings() {
	if (appData.savings == true) {
		let s = +sum.value,
			p = +percent.value;

		appData.monthIncome = s / 100 / 12 * p;
		appData.yearIncome = s / 100 * p;
		monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
		yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
	}
}

sum.addEventListener('input', countSavings);
percent.addEventListener('input', countSavings);

let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false,
};

// for (let key in appData) {
// 	console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
// }

console.log(+expensesValue.textContent);