/**
 * Created by gaurav on 08/09/15.
 *
 * The Page Object.
 * Below is a good refernce to learn more about page objects.
 * https://www.thoughtworks.com/insights/blog/using-page-objects-overcome-protractors-shortcomings
 */

'use strict';

var EntriesNewPage = function () {
	// This method will be called when you create an instance of this page object.
	// This is a good place to open certain webpage like:
	// browser.get('http://angularjs.org/');
};

EntriesNewPage.prototype = Object.create({}, {

	entryTitleField: {
	    get: function () {
	      return element(by.model('vm.entry.title'));
	    }
	},
    setEntryTitleField: {
	    value: function (value) {
	      return this.entryTitleField.sendKeys(value);
	    }
	},
	entryContentField: {
	    get: function () {
	      return element(by.model('vm.entry.content'));
	    }
	},
    setEntryContentField: {
	    value: function (value) {
	      return this.entryContentField.sendKeys(value);
	    }
	},
	createButton: {
		get: function() {
			return element(by.id('submit'));
		}
	},
	clickCreateButton: {
		get: function() {
			return this.createButton.click();
		}
	}

});

module.exports = EntriesNewPage;