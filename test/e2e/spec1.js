/**
 * Created by gaurav on 7/15/15.
 */
'use strict'

//import all page objects that will be used throughout this e2e test
// var HomePage = require('../pages/home.page.js');
// var LoginPage = require('../pages/login.page.js');
// var UserHeaderPage = require('../pages/user.header.page.js');
// var JobListApplyPage = require('../pages/jobs.list.apply.page.js');
// var PreJobDescPage = require('../pages/pre.job.desc.page.js');
// var JobApplicationQuestionnaires = require('../pages/job.application.questionnaires.page.js');

describe('Booking flight via  virgin america web portal', function(){
    
    //var homePage, loginPage, userHeaderPage, jobListApplyPage, preJobDescPage, jobApplicationQuestionnaires;

    var params = browser.params;

    beforeEach(function() {
      //browser.get('https://www.virginamerica.com/');
      browser.get('http://simplydo.com/projector/');

    });

    afterEach(function() {
       //Logout user before going to next test.
       //logout();

    });

   //  it('Almost book a flight for 1 adult in Vergin America site', function(){
   //  	element(by.binding('bookIntro.travelerSummary()')).click();
   //  	element(by.css('[data-vx-e2e-number-picker-adult-add]')).click();

   //  	element(by.css('[data-vx-e2e-number-picker-adult-remove]')).click();

   //  	element(by.css('[data-vx-e2e-booker-airportpicker-dep-toggle=""]')).click();

   //  	element.all(by.binding('airport.name')).count();

   //  	element.all(by.binding('airport.name')).get(0).click();

   //  	element(by.css('[data-vx-e2e-booker-airportpicker-arr-toggle=""]')).click()
 		// element.all(by.binding('airport.name')).count();

 		// element.all(by.binding('airport.name')).get(25).click();

 		// element(by.binding('bookIntro.continueButtonLabel')).click();

   //      // element(by.css('.month-pagination--down.icon-arrow-down-purple')).click();
   //      //element.all(by.repeater('month in calendar.months track by month.monthYear'))
   //      //element.all(by.repeater('month in calendar.months track by month.monthYear').column('month.days'))

   //      element(by.repeater('month in calendar.months track by month.monthYear').row(0).column('month.days'));

   //      //ng-repeat="dayObj in month.days track by $index"



   //  });

it('Test spec', function(){
    expect(true).toBe(true);
});

    /**
 * Find elements inside an ng-repeat.
 *
 * @view
 * <div ng-repeat="cat in pets">
 *   <span>{{cat.name}}</span>
 *   <span>{{cat.age}}</span>
 * </div>
 *
 * <div class="book-img" ng-repeat-start="book in library">
 *   <span>{{$index}}</span>
 * </div>
 * <div class="book-info" ng-repeat-end>
 *   <h4>{{book.name}}</h4>
 *   <p>{{book.blurb}}</p>
 * </div>
 *
 * @example
 * // Returns the DIV for the second cat.
 * var secondCat = element(by.repeater('cat in pets').row(1));
 *
 * // Returns the SPAN for the first cat's name.
 * var firstCatName = element(by.repeater('cat in pets').
 *     row(0).column('cat.name'));
 *
 * // Returns a promise that resolves to an array of WebElements from a column
 * var ages = element.all(
 *     by.repeater('cat in pets').column('cat.age'));
 *
 * // Returns a promise that resolves to an array of WebElements containing
 * // all top level elements repeated by the repeater. For 2 pets rows resolves
 * // to an array of 2 elements.
 * var rows = element.all(by.repeater('cat in pets'));
 *
 * // Returns a promise that resolves to an array of WebElements containing all
 * // the elements with a binding to the book's name.
 * var divs = element.all(by.repeater('book in library').column('book.name'));
 *
 * // Returns a promise that resolves to an array of WebElements containing
 * // the DIVs for the second book.
 * var bookInfo = element.all(by.repeater('book in library').row(1));
 *
 * // Returns the H4 for the first book's name.
 * var firstBookName = element(by.repeater('book in library').
 *     row(0).column('book.name'));
 *
 * // Returns a promise that resolves to an array of WebElements containing
 * // all top level elements repeated by the repeater. For 2 books divs
 * // resolves to an array of 4 elements.
 * var divs = element.all(by.repeater('book in library'));
 *
 * @param {string} repeatDescriptor
 * @return {{findElementsOverride: findElementsOverride, toString: Function|string}}
 */




});