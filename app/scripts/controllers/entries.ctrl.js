/**
 * Created by reuben on 5/08/15.
 */
'use strict';

/**
 * @ngdoc function
 * @name crookedFireApp.controller:EntriesCtrl
 * @description
 * # EntriesCtrl
 * Controller of the crookedFireApp
 */
angular.module('crookedFireApp')
    .controller('EntriesCtrl', function ($scope, $location, $routeParams, FireFactory) {

        var vm = this;
        //declare and init firebase factories
        vm.entriesFactory = FireFactory.getInstance().init('entries');

        //prototype your functions at the beginning of your controllers
        this.findEntry = findEntry;
        this.createEntry = createEntry;
        this.updateEntry = updateEntry;
        this.removeEntry = removeEntry;

        //initialise our resources
        (function () {
            //get list of examples
            vm.entries = vm.entriesFactory.getAll();
        })();

        function findEntry() {

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
