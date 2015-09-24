/**
 * Created by gaurav on 08/09/15.
 *
 * The Page Object.
 * Below is a good refernce to learn more about page objects.
 * https://www.thoughtworks.com/insights/blog/using-page-objects-overcome-protractors-shortcomings
 */

'use strict';

var HeaderPage = function () {
	// This method will be called when you create an instance of this page object.
	// This is a good place to open certain webpage like:
	// browser.get('http://angularjs.org/');
};

HeaderPage.prototype = Object.create({}, {

	homeTab: { get: function() { return element(by.id('home-tab')); }},
	calculatorTab: {get: function() { return element(by.id('calc-tab')); }},
	projectorTab: { get: function() { return element(by.id('projector-tab')); }},
	loginTab: { get: function() { return element(by.id('login')); }},
	registerTab: { get: function() { return element(by.id('register')); }},
	entriesTab: { get: function() { return element(by.id('entries-tab')); }},
	logoutTab: { get: function() { return $('[ng-click="vm.auth.$unauth()"]'); }},

	clickHomeTab: { get: function(){
		this.homeTab.click();
	}},
	clickCalculatorTab: { get: function(){
		this.calculatorTab.click();
	}},
	clickProjectorTab: { get: function(){
		this.projectorTab.click();
	}},
	clickLoginTab: { get: function(){
		this.loginTab.click();
	}},
	clickRegisterTab: { get: function(){
		this.registerTab.click();
	}},
	clickEntriesTab: { get: function(){
		this.entriesTab.click();
	}},
	clickLogoutTab: { get: function(){
		this.logoutTab.click();
	}}

});

module.exports = HeaderPage;
