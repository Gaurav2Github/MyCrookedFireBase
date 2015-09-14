/**
 * Created by gaurav on 08/09/15.
 */
'use strict'

//import all page objects that will be used throughout this e2e test
  var HeaderPage = require('../pages/header.page.js');
  var BalanceProjectorPage = require('../pages/balance.projector.page.js');

  describe('Project balance of the Personal finance', function(){

    var headerPage, balanceProjectorPage;

    beforeEach(function() {
      // Good place to load the webpage on the browser.	
      browser.get('http://localhost:9000/#/');
      //browser.get('file:///home/gaurav/whg/git_repo/projector/index.html');
      //And also good place to login the user.
    });

    afterEach(function() {
       //Good place to Logout the user.

    });


     it("should project the correct balance for the stated personal finance details", function(){
        //Load the Header Page
        headerPage = new HeaderPage();

        headerPage.clickProjectorTab;

     	//Load the Balance Projector Page.
     	balanceProjectorPage = new BalanceProjectorPage();

     	balanceProjectorPage.startBalanceField.sendKeys('1000');

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














     });

	});