describe('slow calculator', function() {
  beforeEach(function() {
    // Good place to load the webpage on the browser.
    browser.get('http://localhost:9000/#/');
    element(by.id('calc-tab')).click();
  });

  it('should add numbers', function() {

    element(by.model('vm.first')).sendKeys(4);
    element(by.model('vm.second')).sendKeys(5);

    element(by.id('gobutton')).click();

    expect(element(by.binding('vm.latest')).getText()).
        toEqual('9');

    
  });

  describe('memory', function() {
    var first, second, goButton;
    beforeEach(function() {
      first = element(by.model('vm.first'));
      second = element(by.model('vm.second'));
      operator = element(by.model('vm.operator'));
      goButton = element(by.id('gobutton'));
    });

    it('should start out with an empty memory', function () {
      var memory =
          element.all(by.repeater('result in vm.memory'));

      expect(memory.count()).toEqual(0);
    });

    it('should fill the memory with past results', function() {
      first.sendKeys(1);
      second.sendKeys(1);
      goButton.click();

      first.sendKeys(10);
      second.sendKeys(20);
      goButton.click();


      first.sendKeys(100);
      second.sendKeys(45);
      operator.$('option[label="-"]').click();
      goButton.click();    
      
      var memory = element.all(by.repeater('result in vm.memory').
          column('result.value'));
      memory.then(function (arr) {
        expect(arr.length).toEqual(3);
        expect(arr[0].getText()).toEqual('55'); // 100 - 45 = 55
        expect(arr[1].getText()).toEqual('30'); // 10 + 20 = 30
        expect(arr[2].getText()).toEqual('2'); // 1 + 1 = 2
        
      });
    });
  });
});