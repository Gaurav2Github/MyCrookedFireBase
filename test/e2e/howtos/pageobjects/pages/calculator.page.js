/**
 * Created by gaurav on 08/09/15.
 *
 * The Page Object.
 * Below is a good refernce to learn more about page objects.
 * https://www.thoughtworks.com/insights/blog/using-page-objects-overcome-protractors-shortcomings
 */

'use strict';

var CalculatorPage = function () {
  // This method will be called when you create an instance of this page object.
  // This is a good place to open certain webpage like:
  // browser.get('http://angularjs.org/');
};

CalculatorPage.prototype = Object.create({}, {

	firstValueField: {
	    get: function () {
	      return element(by.model('vm.first'));
	    }
	},
    setFirstValueField: {
	    value: function (value) {
	      return this.firstValueField.sendKeys(value);
	    }
	},
	secondValueField: {
	    get: function () {
	      return element(by.model('vm.second'));
	    }
	},
    setSecondValueField: {
	    value: function (value) {
	      return this.secondValueField.sendKeys(value);
	    }
	},
	operatorSelectField: {
		get: function() {
			return element(by.model('vm.operator'));
		}
	},
	setOperatorSelectField: {
		value: function(value) {
			return this.operatorSelectField.$('option[label="' + value + '"]').click();
		}
	},
	goButton: {
		get: function() {
			return element(by.id('gobutton'));
		}
	},
	clickGoButton: {
		value: function() {
			return this.goButton.click();
		}
	},
	getLatestValue: {
		get: function() {
			return element(by.binding('vm.latest')).getText();
		}
	},
	getMemoryList: {
		get: function() {
			return element.all(by.repeater('result in vm.memory'));
		}
	},
	getMemoryListCount: {
		get: function() {
			return this.getMemoryList.count();
		}
	},
	getMemoryResultColumnList: {
		get: function() {
			return element.all(by.repeater('result in vm.memory').column('result.value'));
		}
	}
});


module.exports = CalculatorPage;
