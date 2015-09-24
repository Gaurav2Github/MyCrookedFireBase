/**
 * Created by gaurav on 08/09/15.
 *
 * The Page Object.
 * Below is a good refernce to learn more about page objects.
 * https://www.thoughtworks.com/insights/blog/using-page-objects-overcome-protractors-shortcomings
 */

'use strict';

var LoginPage = function () {
	// This method will be called when you create an instance of this page object.
	// This is a good place to open certain webpage like:
	// browser.get('http://angularjs.org/');
};

LoginPage.prototype = Object.create({}, {

	emailField: {
	    get: function () {
	      return element(by.model('vm.email'));
	    }
	},
    setEmailField: {
	    value: function (value) {
	      return this.emailField.sendKeys(value);
	    }
	},
	passwordField: {
	    get: function () {
	      return element(by.model('vm.password'));
	    }
	},
    setPasswordField: {
	    value: function (value) {
	      return this.passwordField.sendKeys(value);
	    }
	},
	loginButton: {
		get: function() {
			return element(by.id('submit'));
		}
	},
	clickLoginButton: {
		value: function() {
			return this.loginButton.click();
		}
	}

});

module.exports = LoginPage;