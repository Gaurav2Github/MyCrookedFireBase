describe('demo non angular app using protractor', function(){

	beforeEach(function() {
   		isAngularSite(false); // isAngularSite(true), if it's an Angular app!
   		
	});

	it('add a apple iphone 5s to cart in flipkart website', function(){
		browser.get('http://www.flipkart.com/');
		
		expect(browser.getCurrentUrl()).toBe('http://www.flipkart.com/');

		element(by.name('q')).sendKeys('apple iphone 5s');
		element(by.buttonText('Search')).click();
		
		
		browser.wait(function() {
            return element(by.css('.gd-col.gu3')).isPresent();
        }, 10000);
    
		element.all(by.css('.gd-col.gu3')).get(1).click();

		
		// browser.wait(function() {
  //           return element(by.buttonText('Add to Cart')).isPresent();
  //       }, 10000);
        browser.sleep(3000);
		element(by.buttonText('Add to Cart')).click();

		
		// browser.wait(function() {
  //           return element(by.css('[href="/viewcart"]')).isPresent();
  //       }, 10000);
        browser.sleep(3000);
        element(by.css('[href="/viewcart"]')).click();

		browser.wait(function() {
            return element(by.css('.item-row')).isPresent();
        }, 10000);
		expect(element.all(by.css('.item-row')).count()).toBe(1);
	});

	it('Add iphone 5s to watchlist on trademe website', function(){
		browser.get('http://www.trademe.co.nz/');
		expect(browser.getCurrentUrl()).toBe('http://www.trademe.co.nz/');
		element(by.id('searchString')).sendKeys('iphone 5s');
		//browser.sleep('2000');
		browser.wait(function() {
            return element(by.css('button.btn.btn-trademe')).isPresent();
        }, 10000);
		element(by.css('button.btn.btn-trademe')).click();
		// browser.sleep('2000');
		//element(by.id('browseRegionLink')).click();
		//browser.sleep('2000');
		//element(by.id('RegionLink12')).click();
		//browser.sleep('2000');

		browser.wait(function() {
            return element(by.id('TopLevelCategory1')).isPresent();
        }, 10000);
		element(by.id('TopLevelCategory1')).click();
		//browser.sleep('2000');

		browser.wait(function() {
            return element(by.id('ListingsTitle_allnewused_new_link')).isPresent();
        }, 10000);
		element(by.id('ListingsTitle_allnewused_new_link')).click();
		// browser.sleep('2000');
		//element(by.css('.supergrid-listing.small.card1')).click();
		browser.wait(function() {
            return element(by.css('.supergrid-listing.medium.card1')).isPresent();
        }, 10000);
		element(by.css('.supergrid-listing.medium.card1')).click();
		//browser.sleep('2000');
		browser.wait(function() {
            return element(by.id('ListingTitle_watchlistLink')).isPresent();
        }, 10000);
		element(by.id('ListingTitle_watchlistLink')).click();
		// browser.sleep('2000');
		browser.wait(function() {
            return element(by.name('page_email')).isPresent();
        }, 10000);
        element(by.name('page_email')).sendKeys(browser.params.login.user1Email);
		element(by.name('page_password')).sendKeys(browser.params.login.user1Pwd);
		
		element(by.id('LoginPageButton')).click();
		
		// browser.sleep('2000');
		browser.wait(function() {
            return element(by.id('AddToWatchlistButton')).isPresent();
        }, 10000);
		element(by.id('AddToWatchlistButton')).click();
		// browser.sleep('2000');
		browser.wait(function() {
            return element(by.linkText('Log out')).isPresent();
        }, 10000);
		element(by.linkText('Log out')).click();
		expect(true).toBe(true);

	});


});