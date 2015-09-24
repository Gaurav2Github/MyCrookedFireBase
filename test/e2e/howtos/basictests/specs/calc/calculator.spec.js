describe('slow calculator', function() {
  
  beforeEach(function() {
    // Good place to load the webpage on the browser.
    browser.get('#/');
    element(by.id('calc-tab')).click();
  });

  it('should mulitply numbers', function() {

    element(by.model('vm.first')).sendKeys(4);
    element(by.model('vm.operator')).$('option[label="*"]').click();
    element(by.model('vm.second')).sendKeys(5);

    element(by.id('gobutton')).click();

    expect(element(by.binding('vm.latest')).getText()).toEqual('20');  
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
      var memory = element.all(by.repeater('result in vm.memory'));
      expect(memory.count()).toEqual(0);
    });

    it('should fill the memory with past results', function() {
      first.sendKeys(5);
      operator.$('option[label="*"]').click();
      second.sendKeys(100);
      goButton.click();
      expect(element(by.binding('vm.latest')).getText()).toEqual('500');  

      first.sendKeys(10);
      operator.$('option[label="+"]').click();
      second.sendKeys(20);
      goButton.click();
      expect(element(by.binding('vm.latest')).getText()).toEqual('30');  


      first.sendKeys(100);
      operator.$('option[label="-"]').click();
      second.sendKeys(45);
      goButton.click();    
      expect(element(by.binding('vm.latest')).getText()).toEqual('55');  
      
      var memory = element.all(by.repeater('result in vm.memory').
          column('result.value'));
      memory.then(function (arr) {
        expect(arr.length).toEqual(3);
        expect(arr[0].getText()).toEqual('55'); // 100 - 45 = 55
        expect(arr[1].getText()).toEqual('30'); // 10 + 20 = 30
        expect(arr[2].getText()).toEqual('500'); // 5 * 100 = 500
        
       });
      });
    });
});