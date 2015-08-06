'use strict';

/**
 * @ngdoc function
 * @name dineApp.controller:AuthenticationCtrl
 * @description
 * # AuthenticationCtrl
 * Controller of the dineApp
 */
angular.module('dineApp')
    .controller('AuthenticationCtrl', function ($rootScope, $location, $routeParams, Auth) {

        var vm = this;

        vm.createUser = createUser;
        vm.removeUser = removeUser;
        vm.login = login;


        function createUser() {
            vm.message = null;
            vm.error = null;

            Auth.$createUser({
                email: vm.email,
                password: vm.password
            }).then(function(userData) {
                vm.message = "User created with uid: " + userData.uid;
                $location.path('/')
            }).catch(function(error) {
                vm.error = error;
            });
        };

        function removeUser() {
            vm.message = null;
            vm.error = null;

            Auth.$removeUser({
                email: vm.email,
                password: vm.password
            }).then(function() {
                vm.message = "User removed";
            }).catch(function(error) {
                vm.error = error;
            });
        };

        function login() {
            $rootScope.authData = null;
            vm.error = null;

            Auth.$authWithPassword({
                email    : vm.email,
                password : vm.password
            }).then(function (authData) {
                $location.path('/')
            }).catch(function(error) {
                console.log(error);
            });

        };



    });