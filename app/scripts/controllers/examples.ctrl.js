/**
 * Created by reuben on 5/08/15.
 */
'use strict';

/**
 * @ngdoc function
 * @name crookedFireApp.controller:ExamplesCtrl
 * @description
 * # ExamplesCtrl is an example of how you can set up three way data binding
 * Controller of the crookedFireApp
 */
angular.module('crookedFireApp')
    .controller('ExamplesCtrl', function ($scope, $location, $routeParams, Examples) {

        var vm = this;
        vm.examples = Examples.getAll();

        //prototype your functions at the beginning of your controllers
        this.initExamples = initExamples;
        this.findExample = findExample;
        this.createExample = createExample;
        this.removeExample = removeExample;

        //And then implement your functions
        function initExamples() {
            console.log(vm.examples)
        }

        function findExample() {
            vm.exampleId = $routeParams.exampleId;
            //retrieve $firebaseObject by key so we can use three way databinding
            vm.example = Examples.getExample(vm.exampleId);
            //bind example to scope to enable three way databinding
            vm.example.$bindTo($scope, 'vm.example');
        }

        function createExample() {
            //simply adds a child to 'examples' branch of json tree.
            vm.examples.$add(vm.example).then(function (ref) {
                //redirects to new 'example' after creation
                $location.path('examples/' + ref.key())
            }).catch(function (err) {
                console.log('create operation failed: ', err);
            });
        }

        function removeExample(example) {
            //must retrieve record from $firebaseArray to execute $remove
            example = vm.examples.$getRecord(example.$id);
            vm.examples.$remove(example).then(function (ref) {
                //redirects to list view after remove
                $location.path('examples');
            }).catch(function (err) {
                console.log('remove operation failed: ', err);
            });
        }

    });
