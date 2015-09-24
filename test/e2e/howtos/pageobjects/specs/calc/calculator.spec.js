/**
 * Created by gaurav on 08/09/15.
 */
'use strict';

//import all page objects that will be used throughout this e2e test
var HeaderPage = require('../../pages/header.page.js');
var CalculatorPage = require('../../pages/calculator.page.js');

describe('slow calculator', function() {

  var headerPage, calculatorPage;

  beforeEach(function() {
    // Good place to load the webpage on the browser.
    browser.get('#/');

    headerPage = new HeaderPage();
    headerPage.clickCalculatorTab;
  });

  it('should mulitply numbers', function() {

    calculatorPage = new CalculatorPage();


    calculatorPage.setFirstValueField(4);

    calculatorPage.setOperatorSelectField('*');

    calculatorPage.setSecondValueField(5)

    calculatorPage.clickGoButton();

    expect(calculatorPage.getLatestValue).toEqual('20');
  });

  describe('memory', function() {

    var first, second, goButton, operator;

    beforeEach(function() {
      
      calculatorPage = new CalculatorPage();
    });

    it('should start out with an empty memory', function () {

      expect(calculatorPage.getMemoryListCount).toEqual(0);
    });

    it('should fill the memory with past results', function() {

      calculatorPage.setFirstValueField(5);

      calculatorPage.setOperatorSelectField('*');

      calculatorPage.setSecondValueField(100);

      calculatorPage.clickGoButton();

      expect(calculatorPage.getLatestValue).toEqual('500');


      calculatorPage.setFirstValueField(10);

      calculatorPage.setOperatorSelectField('+');

      calculatorPage.setSecondValueField(20);

      calculatorPage.clickGoButton();

      expect(calculatorPage.getLatestValue).toEqual('30');



      calculatorPage.setFirstValueField(100);

      calculatorPage.setOperatorSelectField('-');

      calculatorPage.setSecondValueField(45);

      calculatorPage.clickGoButton();

      expect(calculatorPage.getLatestValue).toEqual('55');

      calculatorPage.getMemoryResultColumnList.then(function (arr){
        expect(arr.length).toEqual(3);
        expect(arr[0].getText()).toEqual('55'); // 100 - 45 = 55
        expect(arr[1].getText()).toEqual('30'); // 10 + 20 = 30
        expect(arr[2].getText()).toEqual('500'); // 5 * 100 = 500
       });


      });
    });
});
