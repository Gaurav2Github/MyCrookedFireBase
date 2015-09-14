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
		get: function() { 
			return element(by.model('vm.startBalance')); 
		}
	},
	incomesList: {
		get: function() { 
			return element.all(by.repeater('income in vm.incomes')); 
		}
	},
	incomeNameAt: { 
		get: function(idx) { 
			return this.incomesList.get(idx).element(by.model('income.name')); 
		}
	},
	incomeAmountAt: { 
		get: function(idx) { 
			return this.incomesList.get(idx).element(by.model('income.amount')); 
		}
	},
	incomeFrequencyAt: { 
		get: function(idx) { 
			return this.incomesList.get(idx).element(by.model('income.frequency')); 
		}
	},
	monthlyProjectionList: {
		get: function() { 
			return element.all(by.repeater('change in vm.monthlyProjection() track by $index;')); 
		}
	},
	monthlyProjectionListCount: {
		get: function() { 
			return this.monthlyProjectionList.count(); 
		}
	},
	monthAt: { 
		value: function(idx) { 
			return this.monthlyProjectionList.get(idx).
			element(by.binding('vm.getMonthLabel($index+1)')).getText(); 
		}
	},
	monthlyAccumulatedIncomeAt: { 
		value: function(idx) { 
			return this.monthlyProjectionList.get(idx).
			element(by.binding('vm.roundDown(change)')).getText(); 
		}
	},
	monthlyBalanceAt: { 
		value: function(idx) { 
			return this.monthlyProjectionList.get(idx).
			element(by.binding('vm.roundDown(vm.convertToNumber(vm.startBalance) + change)')).getText(); 
		}
	},
	incomePerMonth: {
		get: function() {
			return element(by.exactBinding('vm.roundDown(vm.monthlyIncome())')).getText();
		}
	},
	incomePerYear: {
		get: function(){
			return element(by.exactBinding('vm.roundDown(vm.monthlyIncome()*12)')).getText();
		}
	},
	expensePerMonth: {
		get: function() {
			return element(by.exactBinding('vm.roundDown(vm.monthlyExpense())')).getText();
		}
	},
	expensePerYear: {
		get: function() {
			return element(by.exactBinding('vm.roundDown(vm.monthlyExpense()*12)')).getText();
		}
	},
	nonRecurringPerMonth: {
		get: function() {
			return element(by.exactBinding('vm.tallyTransactions()')).getText();
		}
	},
	netIncomePerMonth: {
		get: function() {
			return element(by.exactBinding('vm.roundDown(vm.monthlyNet())')).getText();
		}
	},
	netIncomePerYear: {
		get: function() {
			return element(by.exactBinding('vm.roundDown(vm.monthlyNet()*12)+vm.tallyTransactions()')).getText();
		}
	}


});

module.exports = BalanceProjectorPage;