describe('Adding new entry to Entries Tab', function() {
	beforeEach(function() {
    // Good place to load the webpage on the browser.
    browser.get('http://localhost:9000/#/');
    element(by.id('login')).click();
    expect(browser.getCurrentUrl()).toBe('http://localhost:9000/#/auth/login');
    element(by.model('vm.email')).sendKeys("protractor@ngmeetup.co.nz");
    element(by.model('vm.password')).sendKeys("angulare2e");
    element(by.id('submit')).click();
    // browser.sleep(4000);
    // waitForUrlToChangeTo('http://localhost:9000/#/');
    browser.wait(function() {
            return browser.getCurrentUrl().then(function(url) {
                return (url === 'http://localhost:9000/#/');
            });
        }, 10000);
    
    element(by.id('entries-tab')).click();
  });

	it('should add and the number of entries should increase', function(){
		
        element.all(by.repeater('entry in vm.entries')).then(function(elements){
            var initialCount = elements.length;
            var finalCount = initialCount +1;
            $('[ng-href="/#/entries/create"]').click();
            element(by.model('vm.entry.title')).sendKeys('Protractor API reference material');
            element(by.model('vm.entry.content')).sendKeys('http://angular.github.io/protractor/#/api');
            element(by.id('submit')).click();
            browser.wait(function() {
                return browser.getCurrentUrl().then(function(url) {
                    return (url === 'http://localhost:9000/#/entries');
                });
            }, 10000);
            expect(element.all(by.repeater('entry in vm.entries')).count()).toBe(finalCount);    
        });
		
	});

});