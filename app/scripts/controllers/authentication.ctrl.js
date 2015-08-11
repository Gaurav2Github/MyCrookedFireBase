'use strict';

/**
 * @ngdoc function
 * @name crookedFireApp.controller:AuthenticationCtrl
 * @description
 * # AuthenticationCtrl
 * Controller of the crookedFireApp
 */
angular.module('crookedFireApp')
    .controller('AuthenticationCtrl', function ($rootScope, $location, $routeParams, Auth) {

        var vm = this;

        //get fireAuth object and user roles object
        vm.auth = Auth.init();
        vm.roles = Auth.roles();

        vm.createUser = createUser;
        vm.createRoles = createRoles;
        vm.removeUser = removeUser;
        vm.login = login;

        (function () {

        })();


        function createUser() {

            vm.message = null;
            vm.error = null;

            vm.auth.$createUser({
                email: vm.email,
                password: vm.password
            }).then(function(userData) {
                vm.message = "User created with uid: " + userData.uid;
                vm.createRoles(userData);
                $location.path('/auth/login')
            }).catch(function(error) {
                vm.error = error;
            });
        };

        function createRoles(userData) {
            vm.roles[userData.uid] = {'user': true, 'admin': false};
            vm.roles.$save().catch(function (error) {
                vm.error = error;
            });
        }

        //TODO: refactor into user management module
        function removeUser() {

            vm.message = null;
            vm.error = null;

            vm.auth.$removeUser({
                email: vm.email,
                password: vm.password
            }).then(function() {
                vm.message = "User removed";
            }).catch(function(error) {
                vm.error = error;
            });

        };

        function login() {

            vm.error = null;

            vm.auth.$authWithPassword({
                email    : vm.email,
                password : vm.password
            }).then(function (authData) {
                $rootScope.roles = Auth.rolesById(authData.uid);
                $location.path('/')
            }).catch(function(error) {
                vm.error = error;
            });

        };



    });