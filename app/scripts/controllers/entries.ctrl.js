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
    .controller('EntriesCtrl', function ($scope, $location, $routeParams, Entries) {

        var vm = this;
        vm.entries = Entries;

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
            }).catch(function (err) {
                console.log('find one operation failed: ', err);
            });
        }

        function createEntry() {
            vm.entries.$add(vm.entry).then(function (ref) {
                $location.path('entries/' + ref.key())
            }).catch(function (err) {
                console.log('create operation failed: ', err);
            });
        }

        function updateEntry() {
            vm.entries.$save(vm.entry).then(function (ref) {
                $location.path('entries/' + ref.key());
            }).catch(function (err) {
                console.log('update operation failed: ', err);
            });
        }

        function removeEntry(entry) {
            vm.entries.$remove(entry).then(function (ref) {
                $location.path('entries');
            }).catch(function (err) {
                console.log('remove operation failed: ', err);
            });
        }

    });
