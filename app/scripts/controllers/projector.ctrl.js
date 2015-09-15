/**
 * Created by gaurav on 9/10/15.
 */
'use strict';

angular.module('crookedFireApp')
    .controller('ProjectorCtrl', function($scope, FireFactory){

    var vm = this;

    //declare and init firebase factories
    vm.projectorFactory = FireFactory.getInstance().init('projector');

    vm.startBalance = [];
    vm.expenses = [];
    vm.incomes = [];
    vm.nonRecurring = [];

    vm.frequencyArr = [
                        {name:"Daily", value:30.4166666666667},
                        {name:"Business Daily", value:21.6666666666667},
                        {name:"Weekly", value:4.33333333333333},
                        {name:"Every 2 Weeks", value:2.16666666666667},
                        {name:"Monthly", value:1},
                      ];

    //prototype your functions at the beginning of your controllers
    vm.saveProjector = saveProjector;
    vm.clearProjector = clearProjector;
    vm.addExpense = addExpense;
    vm.removeExpense = removeExpense;
    vm.addIncome = addIncome;
    vm.removeIncome = removeIncome;
    vm.addTransaction = addTransaction;
    vm.removeTransaction = removeTransaction;
    vm.initForm = initForm;
    vm.convertToNumber = convertToNumber;
    vm.roundDown = roundDown;
    vm.positiveNegative = positiveNegative;
    vm.monthlyIncome = monthlyIncome;
    vm.monthlyExpense = monthlyExpense;
    vm.monthlyNet = monthlyNet;
    vm.tallyTransactions = tallyTransactions;
    vm.monthlyProjection = monthlyProjection;
    vm.getMonthLabel = getMonthLabel;




    //initialise our resources
    (function () {
      vm.initForm();
      //get list of examples
      //vm.projectors = vm.projectorFactory.getAll();
    })();

    function saveProjector() {

    }

    function clearProjector() {
      vm.startBalance = [];
      vm.expenses = [];
      vm.incomes = [];
      vm.nonRecurring = [];
      vm.initForm();
    }

    function addExpense() {
      var newEmptyExpense = {active:true, name:'', amount:'', frequency:1};
      vm.expenses.push(newEmptyExpense);
    }

    function removeExpense(index) {
      vm.expenses.splice(index, 1);
    }

    function addIncome() {
      var newEmptyIncomes = {active:true, name:'', amount:'',frequency:1};
      vm.incomes.push(newEmptyIncomes);
    }

    function removeIncome(index) {
      vm.incomes.splice(index, 1);
    }

    function addTransaction() {
      var newEmptyTransaction = {active:true, name:'', amount:'', month:1};
      vm.nonRecurring.push(newEmptyTransaction);
    }

    function removeTransaction(index) {
      vm.nonRecurring.splice(index, 1);
    }

    function initForm() {
      if(vm.incomes.length < 1){
        vm.addIncome();
      }
      if(vm.expenses.length < 1){
        vm.addExpense();
      }
      if(vm.nonRecurring.length < 1){
        vm.addTransaction();
      }
    }

    function convertToNumber(value) {
      var floatNumber = parseFloat(value);

      if(floatNumber){
        return floatNumber;
      }else{
        return 0;
      }
    }

    function roundDown(number) {
      return Math.round(number);
    }

    function positiveNegative(value){
      if(value > 0){
        return "positive";
      }
      if(value < 0){
        return "negative";
      }
    }

    function monthlyIncome() {
      var total = 0;
      var thisMonth;
      for(var i = 0; i < vm.incomes.length; i++){
        thisMonth = vm.convertToNumber(vm.incomes[i].amount);
        if(thisMonth != null){
          if(vm.incomes[i].active){
            total = total + (thisMonth * vm.incomes[i].frequency);
          }
        }
      }
      return total;
    }

    function monthlyExpense() {
      var total = 0;
      var thisMonth;
      for(var i = 0; i < vm.expenses.length; i++){
        thisMonth = vm.convertToNumber(vm.expenses[i].amount);
        if(thisMonth != 0) {
          if(vm.expenses[i].active){
            total = total + (thisMonth*vm.expenses[i].frequency);
          }
        }
      }
      return total;
    }

    function monthlyNet() {
      var income = vm.monthlyIncome();
      var expense = vm.monthlyExpense();

      return income - expense;
    }

    function tallyTransactions(){
      var total = 0;
      var oneOff = 0;

      for(var i = 0 ; i < vm.nonRecurring.length; i++){
        oneOff = vm.convertToNumber(vm.nonRecurring[i].amount);
        if(oneOff != 0){
          if(vm.nonRecurring[i].active){
            total = total + oneOff;
          }
        }
      }
      return total;
    }

    function monthlyProjection() {
      var monthByMonth = [];
      var runningTotal = 0;
      var oneOff = 0;

      for (var m = 0; m < 12 ; m++) {
        runningTotal = runningTotal + vm.monthlyNet();

        //adding applicable one-off transactions
        for (var i = 0; i < vm.nonRecurring.length; i++){
          if(vm.convertToNumber(vm.nonRecurring[i].month) == m+1) {
            console.log("vm.convertToNumber(vm.nonRecurring[i].month : ",vm.convertToNumber(vm.nonRecurring[i].month));
            console.log("m+1",m+1);
            oneOff = vm.convertToNumber(vm.nonRecurring[i].amount);
            console.log("oneOff",oneOff);
            if (oneOff != 0) {
              if(vm.nonRecurring[i].active) {
                runningTotal = runningTotal + oneOff;
              }
            }
          }
        }
        monthByMonth[m] = runningTotal;
      }
      return monthByMonth;
    }

    function getMonthLabel(monthAhead) {

      var d = new Date;
      var currentMonth = d.getMonth();
      var year = d.getFullYear();
      var monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];

      var futureMonth = currentMonth + monthAhead;
      if(futureMonth > 11) {
        futureMonth = futureMonth -12;
        year = year + 1;
      }
      return monthNames[futureMonth] + ' ' + year;
    }



  });
