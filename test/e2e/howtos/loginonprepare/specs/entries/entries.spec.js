describe('Adding new entry to Entries Tab', function() {
	
    beforeEach(function() {
    
    
    });

	it('should add and the number of entries should increase', function(){
        element(by.id('entries-tab')).click();
		
		element.all(by.repeater('entry in vm.entries')).then(function(elements){
            var initialCount = elements.length;
            var finalCount = initialCount +1;

            $('[ng-href="/#/entries/create"]').click();
            var title = 'Protractor deals well with login page';
            var content = 'You can put your log-in code into an onPrepare function, which will run once before any of your tests.';
            element(by.model('vm.entry.title')).sendKeys(title);
            element(by.model('vm.entry.content')).sendKeys(content);
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
