/**
 * Created by gaurav on 08/09/15.
 */
'use strict';

//import all page objects that will be used throughout this e2e test
var HeaderPage = require('../../pages/header.page.js');
var EntriesListPage = require('../../pages/entries.list.page.js');
var EntriesNewPage = require('../../pages/entries.new.page.js');
var LoginPage = require('../../pages/login.page.js');

describe('Adding new entry to Entries Tab', function() {

    var headerPage, loginPage, entriesListPage, entriesNewPage;
	
    beforeEach(function() {
        // Good place to load the webpage on the browser and login.
        browser.get('#/');
        headerPage = new HeaderPage();
        loginPage = new LoginPage();
        entriesListPage = new EntriesListPage();
        entriesNewPage = new EntriesNewPage();
        loginUser();

    });

    afterEach(function() {
        headerPage.clickLogoutTab;
    });

	it('should add and the number of entries should increase', function(){

        headerPage.clickEntriesTab;

        entriesListPage.entriesList.then(function(elements){
            
            var initialCount = elements.length;
            var finalCount = initialCount +1;

            entriesListPage.clickCreateEntryButton;
            entriesNewPage.setEntryTitleField('Protractor API reference material');
            entriesNewPage.setEntryContentField('http://angular.github.io/protractor/#/api');
            entriesNewPage.clickCreateButton;
            
            var validEntriesUrl = browser.baseUrl + '#/entries';
            browser.wait(function() {
                return browser.getCurrentUrl().then(function(url) {
                    return (url === validEntriesUrl);
                });
            }, 15000);

            expect(entriesListPage.entriesListCount).toBe(finalCount);

        });

    });



    function loginUser(){

        headerPage.clickLoginTab;
        
        var validAuthUrl = browser.baseUrl + '#/auth/login'
        expect(browser.getCurrentUrl()).toBe(validAuthUrl);
        
        loginPage.setEmailField(browser.params.login.user1Email);

        loginPage.setPasswordField(browser.params.login.user1Pwd);

        loginPage.clickLoginButton();
        
        var validUrl = browser.baseUrl + '#/';
        browser.wait(function() {
                return browser.getCurrentUrl().then(function(url) {
                    return (url === validUrl);
                });
            }, 10000);
        
    }
});