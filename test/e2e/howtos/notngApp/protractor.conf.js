// Tests for the not ng-app.
exports.config = {
  directConnect: true,

  framework: 'jasmine2',

  specs: [
    'specs.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

   // A base URL for your application under test. Calls to protractor.get()
  // with relative paths will be prepended with this.
  //baseUrl: 'http://www.flipkart.com',	

  onPrepare: function() {
   global.isAngularSite = function(flag) {
      browser.ignoreSynchronization = !flag;
   };

   browser.manage().window().setPosition(0, 0);
   browser.manage().window().maximize();
	},

  // The params object will be passed directly to the Protractor instance,
  // and can be accessed from your test as browser.params. It is an arbitrary
  // object and can contain anything you may need in your test.
  // This can be changed via the command line as:
  //   --params.login.user 'Joe'
  params: {
    login: {
      trademeUserEmail: 'xxxxx@xmail.com',
      trademeUser1Pwd: 'xxxxxxxx',
    }
  },


  // Options to be passed to Jasmine2.
  //
  // See https://github.com/jasmine/jasmine-npm/blob/master/lib/jasmine.js
  // for the exact options available.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 100000, // Default time to wait in ms before a test fails.
    isVerbose: true,
    includeStackTrace: true
  }
};
