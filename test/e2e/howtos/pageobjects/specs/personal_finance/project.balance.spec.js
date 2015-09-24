/**
 * Created by gaurav on 08/09/15.
 */
'use strict';

//import all page objects that will be used throughout this e2e test
var HeaderPage = require('../../pages/header.page.js');
var BalanceProjectorPage = require('../../pages/balance.projector.page.js');

describe('Project balance of the Personal finance', function () {

  var headerPage, balanceProjectorPage;

  beforeEach(function () {
    // Good place to load the webpage on the browser.
    browser.get('http://localhost:9000/#/');
    //And also good place to login the user.
  });

  afterEach(function () {
    //Good place to Logout the user.
  });


  it("should project the correct balance for the stated personal finance details", function () {
    //Load the Header Page
    headerPage = new HeaderPage();

    headerPage.clickProjectorTab;

    //Load the Balance Projector Page.
    balanceProjectorPage = new BalanceProjectorPage();

    balanceProjectorPage.setStartBalanceField('1000');

    expect(balanceProjectorPage.monthlyProjectionListCount).toEqual(12);


    expect(balanceProjectorPage.monthAt(0)).toEqual('October 2015');
    expect(balanceProjectorPage.monthAt(1)).toEqual('November 2015');
    expect(balanceProjectorPage.monthAt(2)).toEqual('December 2015');
    expect(balanceProjectorPage.monthAt(3)).toEqual('January 2016');
    expect(balanceProjectorPage.monthAt(4)).toEqual('February 2016');
    expect(balanceProjectorPage.monthAt(5)).toEqual('March 2016');
    expect(balanceProjectorPage.monthAt(6)).toEqual('April 2016');
    expect(balanceProjectorPage.monthAt(7)).toEqual('May 2016');
    expect(balanceProjectorPage.monthAt(8)).toEqual('June 2016');
    expect(balanceProjectorPage.monthAt(9)).toEqual('July 2016');
    expect(balanceProjectorPage.monthAt(10)).toEqual('August 2016');
    expect(balanceProjectorPage.monthAt(11)).toEqual('September 2016');

    expect(balanceProjectorPage.monthlyAccumulatedIncomeAt(0)).toEqual('0');
    expect(balanceProjectorPage.monthlyAccumulatedIncomeAt(1)).toEqual('0');
    expect(balanceProjectorPage.monthlyAccumulatedIncomeAt(2)).toEqual('0');
    expect(balanceProjectorPage.monthlyAccumulatedIncomeAt(3)).toEqual('0');
    expect(balanceProjectorPage.monthlyAccumulatedIncomeAt(4)).toEqual('0');
    expect(balanceProjectorPage.monthlyAccumulatedIncomeAt(5)).toEqual('0');
    expect(balanceProjectorPage.monthlyAccumulatedIncomeAt(6)).toEqual('0');
    expect(balanceProjectorPage.monthlyAccumulatedIncomeAt(7)).toEqual('0');
    expect(balanceProjectorPage.monthlyAccumulatedIncomeAt(8)).toEqual('0');
    expect(balanceProjectorPage.monthlyAccumulatedIncomeAt(9)).toEqual('0');
    expect(balanceProjectorPage.monthlyAccumulatedIncomeAt(10)).toEqual('0');
    expect(balanceProjectorPage.monthlyAccumulatedIncomeAt(11)).toEqual('0');

    expect(balanceProjectorPage.monthlyBalanceAt(0)).toEqual('1000');
    expect(balanceProjectorPage.monthlyBalanceAt(1)).toEqual('1000');
    expect(balanceProjectorPage.monthlyBalanceAt(2)).toEqual('1000');
    expect(balanceProjectorPage.monthlyBalanceAt(3)).toEqual('1000');
    expect(balanceProjectorPage.monthlyBalanceAt(4)).toEqual('1000');
    expect(balanceProjectorPage.monthlyBalanceAt(5)).toEqual('1000');
    expect(balanceProjectorPage.monthlyBalanceAt(6)).toEqual('1000');
    expect(balanceProjectorPage.monthlyBalanceAt(7)).toEqual('1000');
    expect(balanceProjectorPage.monthlyBalanceAt(8)).toEqual('1000');
    expect(balanceProjectorPage.monthlyBalanceAt(9)).toEqual('1000');
    expect(balanceProjectorPage.monthlyBalanceAt(10)).toEqual('1000');
    expect(balanceProjectorPage.monthlyBalanceAt(11)).toEqual('1000');

    expect(balanceProjectorPage.incomePerMonth).toEqual('0');
    expect(balanceProjectorPage.incomePerYear).toEqual('0');

    expect(balanceProjectorPage.expensePerMonth).toEqual('0');
    expect(balanceProjectorPage.expensePerYear).toEqual('0');

    expect(balanceProjectorPage.nonRecurringPerMonth).toEqual('0');

    expect(balanceProjectorPage.netIncomePerMonth).toEqual('0');
    expect(balanceProjectorPage.netIncomePerYear).toEqual('0');

    balanceProjectorPage.setIncomeNameAt(0, 'Salary');
    balanceProjectorPage.setIncomeAmountAt(0, '4000');
    balanceProjectorPage.selectIncomeFrequencyAt(0, 'Daily');
    balanceProjectorPage.selectIncomeFrequencyAt(0, 'Monthly');

    expect(balanceProjectorPage.monthlyAccumulatedIncomeAt(0)).toEqual('4000');
    expect(balanceProjectorPage.monthlyAccumulatedIncomeAt(1)).toEqual('8000');
    expect(balanceProjectorPage.monthlyAccumulatedIncomeAt(2)).toEqual('12000');
    expect(balanceProjectorPage.monthlyAccumulatedIncomeAt(3)).toEqual('16000');
    expect(balanceProjectorPage.monthlyAccumulatedIncomeAt(4)).toEqual('20000');
    expect(balanceProjectorPage.monthlyAccumulatedIncomeAt(5)).toEqual('24000');
    expect(balanceProjectorPage.monthlyAccumulatedIncomeAt(6)).toEqual('28000');
    expect(balanceProjectorPage.monthlyAccumulatedIncomeAt(7)).toEqual('32000');
    expect(balanceProjectorPage.monthlyAccumulatedIncomeAt(8)).toEqual('36000');
    expect(balanceProjectorPage.monthlyAccumulatedIncomeAt(9)).toEqual('40000');
    expect(balanceProjectorPage.monthlyAccumulatedIncomeAt(10)).toEqual('44000');
    expect(balanceProjectorPage.monthlyAccumulatedIncomeAt(11)).toEqual('48000');

    expect(balanceProjectorPage.monthlyBalanceAt(0)).toEqual('5000');
    expect(balanceProjectorPage.monthlyBalanceAt(1)).toEqual('9000');
    expect(balanceProjectorPage.monthlyBalanceAt(2)).toEqual('13000');
    expect(balanceProjectorPage.monthlyBalanceAt(3)).toEqual('17000');
    expect(balanceProjectorPage.monthlyBalanceAt(4)).toEqual('21000');
    expect(balanceProjectorPage.monthlyBalanceAt(5)).toEqual('25000');
    expect(balanceProjectorPage.monthlyBalanceAt(6)).toEqual('29000');
    expect(balanceProjectorPage.monthlyBalanceAt(7)).toEqual('33000');
    expect(balanceProjectorPage.monthlyBalanceAt(8)).toEqual('37000');
    expect(balanceProjectorPage.monthlyBalanceAt(9)).toEqual('41000');
    expect(balanceProjectorPage.monthlyBalanceAt(10)).toEqual('45000');
    expect(balanceProjectorPage.monthlyBalanceAt(11)).toEqual('49000');

    expect(balanceProjectorPage.incomePerMonth).toEqual('4000');
    expect(balanceProjectorPage.incomePerYear).toEqual('48000');

    expect(balanceProjectorPage.expensePerMonth).toEqual('0');
    expect(balanceProjectorPage.expensePerYear).toEqual('0');

    expect(balanceProjectorPage.nonRecurringPerMonth).toEqual('0');

    expect(balanceProjectorPage.netIncomePerMonth).toEqual('4000');
    expect(balanceProjectorPage.netIncomePerYear).toEqual('48000');

    balanceProjectorPage.addNewIncome();
    expect(balanceProjectorPage.incomesListCount()).toEqual(2);

    balanceProjectorPage.setExpenseNameAt(0, 'Rent');
    balanceProjectorPage.setExpenseAmountAt(0, '300');
    balanceProjectorPage.selectExpenseFrequencyAt(0, 'Weekly');

    expect(balanceProjectorPage.monthlyAccumulatedIncomeAt(0)).toEqual('2700');
    expect(balanceProjectorPage.monthlyAccumulatedIncomeAt(1)).toEqual('5400');
    expect(balanceProjectorPage.monthlyAccumulatedIncomeAt(2)).toEqual('8100');
    expect(balanceProjectorPage.monthlyAccumulatedIncomeAt(3)).toEqual('10800');
    expect(balanceProjectorPage.monthlyAccumulatedIncomeAt(4)).toEqual('13500');
    expect(balanceProjectorPage.monthlyAccumulatedIncomeAt(5)).toEqual('16200');
    expect(balanceProjectorPage.monthlyAccumulatedIncomeAt(6)).toEqual('18900');
    expect(balanceProjectorPage.monthlyAccumulatedIncomeAt(7)).toEqual('21600');
    expect(balanceProjectorPage.monthlyAccumulatedIncomeAt(8)).toEqual('24300');
    expect(balanceProjectorPage.monthlyAccumulatedIncomeAt(9)).toEqual('27000');
    expect(balanceProjectorPage.monthlyAccumulatedIncomeAt(10)).toEqual('29700');
    expect(balanceProjectorPage.monthlyAccumulatedIncomeAt(11)).toEqual('32400');

    expect(balanceProjectorPage.monthlyBalanceAt(0)).toEqual('3700');
    expect(balanceProjectorPage.monthlyBalanceAt(1)).toEqual('6400');
    expect(balanceProjectorPage.monthlyBalanceAt(2)).toEqual('9100');
    expect(balanceProjectorPage.monthlyBalanceAt(3)).toEqual('11800');
    expect(balanceProjectorPage.monthlyBalanceAt(4)).toEqual('14500');
    expect(balanceProjectorPage.monthlyBalanceAt(5)).toEqual('17200');
    expect(balanceProjectorPage.monthlyBalanceAt(6)).toEqual('19900');
    expect(balanceProjectorPage.monthlyBalanceAt(7)).toEqual('22600');
    expect(balanceProjectorPage.monthlyBalanceAt(8)).toEqual('25300');
    expect(balanceProjectorPage.monthlyBalanceAt(9)).toEqual('28000');
    expect(balanceProjectorPage.monthlyBalanceAt(10)).toEqual('30700');
    expect(balanceProjectorPage.monthlyBalanceAt(11)).toEqual('33400');

    expect(balanceProjectorPage.incomePerMonth).toEqual('4000');
    expect(balanceProjectorPage.incomePerYear).toEqual('48000');

    expect(balanceProjectorPage.expensePerMonth).toEqual('1300');
    expect(balanceProjectorPage.expensePerYear).toEqual('15600');

    expect(balanceProjectorPage.nonRecurringPerMonth).toEqual('0');

    expect(balanceProjectorPage.netIncomePerMonth).toEqual('2700');
    expect(balanceProjectorPage.netIncomePerYear).toEqual('32400');

    balanceProjectorPage.addNewExpense();
    expect(balanceProjectorPage.expensesListCount()).toEqual(2);



    balanceProjectorPage.setNonRecurringTransNameAt(0,'Bonus1');
    balanceProjectorPage.setNonRecurringTransAmountAt(0,'500');
    balanceProjectorPage.selectNonRecurringTransMonthAt(0, 'April 2016');

    expect(balanceProjectorPage.monthlyAccumulatedIncomeAt(0)).toEqual('2700');
    expect(balanceProjectorPage.monthlyAccumulatedIncomeAt(1)).toEqual('5400');
    expect(balanceProjectorPage.monthlyAccumulatedIncomeAt(2)).toEqual('8100');
    expect(balanceProjectorPage.monthlyAccumulatedIncomeAt(3)).toEqual('10800');
    expect(balanceProjectorPage.monthlyAccumulatedIncomeAt(4)).toEqual('13500');
    expect(balanceProjectorPage.monthlyAccumulatedIncomeAt(5)).toEqual('16200');
    expect(balanceProjectorPage.monthlyAccumulatedIncomeAt(6)).toEqual('19400');
    expect(balanceProjectorPage.monthlyAccumulatedIncomeAt(7)).toEqual('22100');
    expect(balanceProjectorPage.monthlyAccumulatedIncomeAt(8)).toEqual('24800');
    expect(balanceProjectorPage.monthlyAccumulatedIncomeAt(9)).toEqual('27500');
    expect(balanceProjectorPage.monthlyAccumulatedIncomeAt(10)).toEqual('30200');
    expect(balanceProjectorPage.monthlyAccumulatedIncomeAt(11)).toEqual('32900');

    expect(balanceProjectorPage.monthlyBalanceAt(0)).toEqual('3700');
    expect(balanceProjectorPage.monthlyBalanceAt(1)).toEqual('6400');
    expect(balanceProjectorPage.monthlyBalanceAt(2)).toEqual('9100');
    expect(balanceProjectorPage.monthlyBalanceAt(3)).toEqual('11800');
    expect(balanceProjectorPage.monthlyBalanceAt(4)).toEqual('14500');
    expect(balanceProjectorPage.monthlyBalanceAt(5)).toEqual('17200');
    expect(balanceProjectorPage.monthlyBalanceAt(6)).toEqual('20400');
    expect(balanceProjectorPage.monthlyBalanceAt(7)).toEqual('23100');
    expect(balanceProjectorPage.monthlyBalanceAt(8)).toEqual('25800');
    expect(balanceProjectorPage.monthlyBalanceAt(9)).toEqual('28500');
    expect(balanceProjectorPage.monthlyBalanceAt(10)).toEqual('31200');
    expect(balanceProjectorPage.monthlyBalanceAt(11)).toEqual('33900');

    expect(balanceProjectorPage.incomePerMonth).toEqual('4000');
    expect(balanceProjectorPage.incomePerYear).toEqual('48000');

    expect(balanceProjectorPage.expensePerMonth).toEqual('1300');
    expect(balanceProjectorPage.expensePerYear).toEqual('15600');

    expect(balanceProjectorPage.nonRecurringPerMonth).toEqual('500');

    expect(balanceProjectorPage.netIncomePerMonth).toEqual('2700');
    expect(balanceProjectorPage.netIncomePerYear).toEqual('32900');

    balanceProjectorPage.addNewNonRecurringTrans();
    expect(balanceProjectorPage.nonRecurringTransListCount()).toEqual(2);

    balanceProjectorPage.removeIncomeAt(1);
    expect(balanceProjectorPage.incomesListCount()).toEqual(1);

    balanceProjectorPage.removeExpenseAt(1);
    expect(balanceProjectorPage.expensesListCount()).toEqual(1);

    balanceProjectorPage.removeNonRecurringTransAt(1);
    expect(balanceProjectorPage.nonRecurringTransListCount()).toEqual(1);

  });

});
