/**
 * Created by gaurav on 08/09/15.
 *
 * The Page Object.
 * Below is a good refernce to learn more about page objects.
 * https://www.thoughtworks.com/insights/blog/using-page-objects-overcome-protractors-shortcomings
 */

'use strict';

var EntriesListPage = function () {
	// This method will be called when you create an instance of this page object.
	// This is a good place to open certain webpage like:
	// browser.get('http://angularjs.org/');
};

EntriesListPage.prototype = Object.create({}, {

	clickCreateEntryButton: {
	    get: function () {
	      return $('[ng-href="/#/entries/create"]').click();
	    }
	},
	entriesList: {
	    get: function () {
	      return element.all(by.repeater('entry in vm.entries'));
	    }
	},
    entriesListCount: {
	    get: function () {
	      return this.entriesList.count()
	    }
	}

});

module.exports = EntriesListPage;