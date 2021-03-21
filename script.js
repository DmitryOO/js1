'use strict';

let money = +prompt ('Ваш бюджет на месяц?', '0');
let date = prompt ('Введите дату в формате YYYY-MM-DD', '2021-01-01');
let exReason1 = prompt ('Введите обязательную статью расходов в этом месяце', '');
let exSum1 = +prompt ('Во сколько обойдется?', '1000');
let exReason2 = prompt ('Введите обязательную статью расходов в этом месяце', '');
let exSum2 = +prompt ('Во сколько обойдется?', '1000');
let appData = {
  budget: money,
  timeData: date,
  expenses: {
    exReason1: exSum1,
    exReason2: exSum2,
    optionalExpenses: {},
    income: [],
    savings: false,
  }
};

alert(money/30);
