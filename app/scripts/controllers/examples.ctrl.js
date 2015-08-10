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
            vm.example = Examples.getExample(vm.exampleId);
            vm.example.$bindTo($scope, 'vm.example');
        }

        function createExample() {
            vm.examples.$add(vm.example).then(function (ref) {
                $location.path('examples/' + ref.key())
            }).catch(function (err) {
                console.log('create operation failed: ', err);
            });
        }

        function removeExample(example) {
            vm.examples.$remove(example).then(function (ref) {
                $location.path('examples');
            }).catch(function (err) {
                console.log('remove operation failed: ', err);
            });
        }

    });
