/**
 * Created by gaurav on 6/25/15.
 *
 * the reference config file.
 * https://github.com/angular/protractor/blob/master/docs/referenceConf.js
 */
 exports.config = {

  // ---------------------------------------------------------------------------
  // ----- How to connect to Browser Drivers -----------------------------------
  // ---------------------------------------------------------------------------
  //

  // ---- To connect directly to Drivers ------------------------------------
  // Boolean. If true, Protractor will connect directly to the browser Drivers
  // at the locations specified by chromeDriver and firefoxPath. Only Chrome
  // and Firefox are supported for direct connect.
  directConnect: true,

  // ---------------------------------------------------------------------------
  // ----- What tests to run ---------------------------------------------------
  // ---------------------------------------------------------------------------

  // Spec patterns are relative to the location of this config.
  specs: [
     // 'e2e/*.js',
     //  'e2e/**/*.js',
      'specs/**/*.js'
  ],


  // Alternatively, suites may be used. When run without a command line
  // parameter, all suites will run. If run with "--suite=homepage" or
  // "--suite=homepage,jobsApply"  only the patterns matched by the specified suites will
  // run.
  suites: {
    calc: [
      'specs/calc/calculator.spec.js'
    ],
    entries: 'specs/entries/entries.spec.js'
  },

  // Protractor can launch your tests on one or more browsers. If you are
  // testing on a single browser, use the capabilities option. If you are
  // testing on multiple browsers, use the multiCapabilities array.

  // For a list of available capabilities, see
  // https://github.com/SeleniumHQ/selenium/wiki/DesiredCapabilities
  //
  // In addition, you may specify count, shardTestFiles, and maxInstances.
  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // ---------------------------------------------------------------------------
  // ----- Global test information ---------------------------------------------
  // ---------------------------------------------------------------------------
  //
  // A base URL for your application under test. Calls to protractor.get()
  // with relative paths will be prepended with this.
  baseUrl:  'http://localhost:9000/',

  // A callback function called once protractor is ready and available, and
  // before the specs are executed.
  // If multiple capabilities are being run, this will run once per
  // capability.
  // You can specify a file containing code to run by setting onPrepare to
  // the filename string.
  // At this point, global variable 'protractor' object will be set up, and
  // globals from the test framework will be available.
  onPrepare: function() {
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
      user1Email: 'protractor@ngmeetup.co.nz',
      user1Pwd: 'angulare2e',
    }

  },

  // ---------------------------------------------------------------------------
  // ----- The test framework --------------------------------------------------
  // ---------------------------------------------------------------------------

  // Framework to use. Jasmine 2 is recommended.
  framework: 'jasmine2',


  // Options to be passed to Jasmine2.
  //
  // See https://github.com/jasmine/jasmine-npm/blob/master/lib/jasmine.js
  // for the exact options available.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 50000, // Default time to wait in ms before a test fails.
    isVerbose: true,
    includeStackTrace: true
  }

}