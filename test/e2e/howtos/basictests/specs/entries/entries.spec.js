describe('Adding new entry to Entries Tab', function() {
	
    beforeEach(function() {
    // Good place to load the webpage on the browser and login.
    browser.get('#/');
    loginUser();

  });

	it('should add and the number of entries should increase', function(){

        element(by.id('entries-tab')).click();
		
		element.all(by.repeater('entry in vm.entries')).then(function(elements){
            var initialCount = elements.length;
            var finalCount = initialCount +1;

            $('[ng-href="/#/entries/create"]').click();
            element(by.model('vm.entry.title')).sendKeys('Protractor API reference material');
            element(by.model('vm.entry.content')).sendKeys('http://angular.github.io/protractor/#/api');
            element(by.id('submit')).click();

            var validEntriesUrl = browser.baseUrl + '#/entries';
            browser.wait(function() {
                return browser.getCurrentUrl().then(function(url) {
                    return (url === validEntriesUrl);
                });
            }, 10000);

            expect(element.all(by.repeater('entry in vm.entries')).count()).toBe(finalCount);    
        });

});

});

function loginUser(){

    element(by.id('login')).click();

    var validAuthUrl = browser.baseUrl + '#/auth/login'
    expect(browser.getCurrentUrl()).toBe(validAuthUrl);
    
    element(by.model('vm.email')).sendKeys(browser.params.login.user1Email);
    element(by.model('vm.password')).sendKeys(browser.params.login.user1Pwd);
    element(by.id('submit')).click();
    
    var validUrl = browser.baseUrl + '#/';
    browser.wait(function() {
            return browser.getCurrentUrl().then(function(url) {
                return (url === validUrl);
            });
        }, 10000);
    
}