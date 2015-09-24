/**
 * Created by gaurav on 08/09/15.
 *
 * The Page Object.
 * Below is a good refernce to learn more about page objects.
 * https://www.thoughtworks.com/insights/blog/using-page-objects-overcome-protractors-shortcomings
 */

'use strict';

var BalanceProjectorPage = function () {
  // This method will be called when you create an instance of this page object.
  // This is a good place to open certain webpage like:
  // browser.get('http://angularjs.org/');
};

BalanceProjectorPage.prototype = Object.create({}, {

  startBalanceField: {
    get: function () {
      return element(by.model('vm.startBalance'));
    }
  },
  setStartBalanceField: {
    value: function (value) {
      return this.startBalanceField.sendKeys(value);
    }
  },
  incomesList: {
    get: function () {
      return element.all(by.repeater('income in vm.incomes'));
    }
  },
  incomesListCount: {
    value: function () {
      return this.incomesList.count();
    }
  },
  incomeNameAt: {
    value: function (idx) {
      return this.incomesList.get(idx).element(by.model('income.name'));
    }
  },
  setIncomeNameAt: {
    value: function (idx, value) {
      return this.incomeNameAt(idx).sendKeys(value);
    }
  },
  incomeAmountAt: {
    value: function (idx) {
      return this.incomesList.get(idx).element(by.model('income.amount'));
    }
  },
  setIncomeAmountAt: {
    value: function (idx, value) {
      return this.incomeAmountAt(idx).sendKeys(value);
    }
  },
  incomeFrequencyAt: {
    value: function (idx) {
      return this.incomesList.get(idx).element(by.model('income.frequency'));
    }
  },
  selectIncomeFrequencyAt: {
    value: function (idx, value) {
      return this.incomeFrequencyAt(idx).$('option[label="' + value + '"]').click();
    }
  },
  removeIncomeAt: {
    value: function (idx) {
      return this.incomesList.get(idx).$('[ng-click="vm.removeIncome($index);"]').click();
    }
  },
  addNewIncome: {
    value: function () {
      return $('[ng-click="vm.addIncome();"]').click();
    }
  },
  expensesList: {
    get: function () {
      return element.all(by.repeater('expense in vm.expenses'));
    }
  },
  expensesListCount: {
    value: function () {
      return this.expensesList.count();
    }
  },
  expenseNameAt: {
    value: function (idx) {
      return this.expensesList.get(idx).element(by.model('expense.name'));
    }
  },
  setExpenseNameAt: {
    value: function (idx, value) {
      return this.expenseNameAt(idx).sendKeys(value);
    }
  },
  expenseAmountAt: {
    value: function (idx) {
      return this.expensesList.get(idx).element(by.model('expense.amount'));
    }
  },
  setExpenseAmountAt: {
    value: function (idx, value) {
      return this.expenseAmountAt(idx).sendKeys(value);
    }
  },
  expenseFrequencyAt: {
    value: function (idx) {
      return this.expensesList.get(idx).element(by.model('expense.frequency'));
    }
  },
  selectExpenseFrequencyAt: {
    value: function (idx, value) {
      return this.expenseFrequencyAt(idx).$('option[label="' + value + '"]').click();
    }
  },
  removeExpenseAt: {
    value: function (idx) {
      return this.expensesList.get(idx).$('[ng-click="vm.removeExpense($index);"]').click();
    }
  },
  addNewExpense: {
    value: function () {
      return $('[ng-click="vm.addExpense();"]').click();
    }
  },
  nonRecurringTransList: {
    get: function () {
      return element.all(by.repeater('transaction in vm.nonRecurring'));
    }
  },
  nonRecurringTransListCount: {
    value: function () {
      return this.nonRecurringTransList.count();
    }
  },
  nonRecurringTransNameAt: {
    value: function (idx) {
      return this.nonRecurringTransList.get(idx).element(by.model('transaction.name'));
    }
  },
  setNonRecurringTransNameAt: {
    value: function (idx, value) {
      return this.nonRecurringTransNameAt(idx).sendKeys(value);
    }
  },
  nonRecurringTransAmountAt: {
    value: function (idx) {
      return this.nonRecurringTransList.get(idx).element(by.model('transaction.amount'));
    }
  },
  setNonRecurringTransAmountAt: {
    value: function (idx, value) {
      return this.nonRecurringTransAmountAt(idx).sendKeys(value);
    }
  },
  nonRecurringTransMonthAt: {
    value: function (idx) {
      return this.nonRecurringTransList.get(idx).element(by.model('transaction.month'));
    }
  },
  selectNonRecurringTransMonthAt: {
    value: function (idx, value) {
      return this.nonRecurringTransMonthAt(idx).$('option[label="' + value + '"]').click();
    }
  },
  removeNonRecurringTransAt: {
    value: function (idx) {
      return this.nonRecurringTransList.get(idx).$('[ng-click="vm.removeTransaction($index);"]').click();
    }
  },
  addNewNonRecurringTrans: {
    value: function () {
      return $('[ng-click="vm.addTransaction();"]').click();
    }
  },
  monthlyProjectionList: {
    get: function () {
      return element.all(by.repeater('change in vm.monthlyProjection() track by $index;'));
    }
  },
  monthlyProjectionListCount: {
    get: function () {
      return this.monthlyProjectionList.count();
    }
  },
  monthAt: {
    value: function (idx) {
      return this.monthlyProjectionList.get(idx).
        element(by.binding('vm.getMonthLabel($index+1)')).getText();
    }
  },
  monthlyAccumulatedIncomeAt: {
    value: function (idx) {
      return this.monthlyProjectionList.get(idx).
        element(by.binding('vm.roundDown(change)')).getText();
    }
  },
  monthlyBalanceAt: {
    value: function (idx) {
      return this.monthlyProjectionList.get(idx).
        element(by.binding('vm.roundDown(vm.convertToNumber(vm.startBalance) + change)')).getText();
    }
  },
  incomePerMonth: {
    get: function () {
      return element(by.exactBinding('vm.roundDown(vm.monthlyIncome())')).getText();
    }
  },
  incomePerYear: {
    get: function () {
      return element(by.exactBinding('vm.roundDown(vm.monthlyIncome()*12)')).getText();
    }
  },
  expensePerMonth: {
    get: function () {
      return element(by.exactBinding('vm.roundDown(vm.monthlyExpense())')).getText();
    }
  },
  expensePerYear: {
    get: function () {
      return element(by.exactBinding('vm.roundDown(vm.monthlyExpense()*12)')).getText();
    }
  },
  nonRecurringPerMonth: {
    get: function () {
      return element(by.exactBinding('vm.tallyTransactions()')).getText();
    }
  },
  netIncomePerMonth: {
    get: function () {
      return element(by.exactBinding('vm.roundDown(vm.monthlyNet())')).getText();
    }
  },
  netIncomePerYear: {
    get: function () {
      return element(by.exactBinding('vm.roundDown(vm.monthlyNet()*12)+vm.tallyTransactions()')).getText();
    }
  }


});

module.exports = BalanceProjectorPage;
