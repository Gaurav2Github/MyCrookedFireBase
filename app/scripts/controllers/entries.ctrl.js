/**
 * Created by reuben on 5/08/15.
 */
'use strict';

/**
 * @ngdoc function
 * @name dineApp.controller:EntriesCtrl
 * @description
 * # EntriesCtrl
 * Controller of the dineApp
 */
angular.module('dineApp')
    .controller('EntriesCtrl', function ($scope, $location, $routeParams, $firebaseArray) {

        var vm = this;

        vm.entriesURL = 'https://glaring-fire-8569.firebaseio.com/entries'
        vm.entriesRef = new Firebase(vm.entriesURL);
        vm.entries = $firebaseArray(vm.entriesRef);

        //prototype your functions at the beginning of your controllers
        this.initEntries = initEntries;

        this.findEntry = findEntry;
        this.createEntry = createEntry;
        this.updateEntry = updateEntry;
        this.removeEntry = removeEntry;

        //And then implement your functions
        function initEntries() {
            console.log(vm.entries)
        }

        function findEntry() {
            //three way data binding command commented out (shit is crazy)
//            vm.entries.$child($routeParams.entryId).$bind($scope, 'vm.entry');
            vm.entryId = $routeParams.entryId;
            vm.entries.$loaded().then(function () {
                vm.entry = vm.entries.$getRecord(vm.entryId);
            })

        }

        function createEntry() {
            vm.entries.$add(vm.entry);
            $location.path('entries');
        }

        function updateEntry() {
            vm.entries.$save(vm.entry);
            $location.path('entries');
        }


        function removeEntry(entry) {
            vm.entries.$remove(entry);
            $location.path('entries');
        }


    });
