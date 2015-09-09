/**
 * Created by gaurav on 09/09/15.
 */
'use strict';

angular.module('crookedFireApp')
    .controller('CalcCtrl', function ($scope, $timeout, FireFactory) {
    	  var vm = this;
        //declare and init firebase factories
        vm.calcFactory = FireFactory.getInstance().init('calc');

        vm.memory = [];
  	    vm.latest = 0;
        vm.operators = {
          ADDITION: '+',
          SUBTRACTION: '-',
          MULTIPLICATION: '*',
          DIVISION: '/',
          MODULO: '%'
        };
  	    vm.operator = vm.operators.ADDITION;

        vm.doAddition = function() {
		    var times = 5;
		    vm.latest = '. ';
		    $timeout(function tickslowly() {
		      if (times == 0) {
		        var latestResult;
		        var first = parseInt(vm.first);
		        var second = parseInt(vm.second);
		        switch (vm.operator) {
		          case '+':
		            latestResult = first + second;
		            break;
		          case '-':
		            latestResult = first - second;
		            break;
		          case '*':
		            latestResult = first * second;
		            break;
		          case '/':
		            latestResult = first / second;
		            break;
		          case '%':
		            latestResult = first % second;
		            break;
		        }
		        vm.memory.unshift({
		          timestamp: new Date(),
		          first: vm.first,
		          operator: vm.operator,
		          second: vm.second,
		          value: latestResult
		        });
		        vm.first = vm.second = '';
		        vm.latest = latestResult;
          } else {
		        vm.latest += '. ';
		        times--;
		        $timeout(tickslowly, 300);
		      }
		    }, 300)
		  };


});
