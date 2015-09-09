/**
 * Created by reuben on 5/08/15.
 */

/**
 * @ngdoc function
 * @name crookedFireApp.controller:NavigationCtrl
 * @description
 * # NavigationCtrl
 * Controller of the crookedFireApp
 */

"use strict";

angular.module('crookedFireApp').controller('NavigationCtrl', function ($rootScope, $location, $routeParams, Auth) {

        var vm = this;

        //initalise $firebaseAuth
        vm.auth = Auth.init();

        vm.selectTab = selectTab;
        vm.authorizeUser = authorizeUser;

        $rootScope.goTo = goTo;

        //Anonymous function,called on initialisation
        //configure your navigation bar here
        (function () {

            vm.tabs = [
                {id: 'home-tab', href: '/#/', roles: [''], active: false, title: "  HOME", icon_class: "glyphicon-home"},
                {id: 'calc-tab', href: '/#/calc', roles: [''], active: false, title: "  CALCULATOR", icon_class: "glyphicon-edit"},
                {id: 'entries-tab', href: '/#/entries', roles: ['user'], active: false, title: "  ENTRIES", icon_class: "glyphicon-book"},
                {id: 'examples-tab', href: '/#/examples', roles: ['admin'], active: false, title: "  EXAMPLES", icon_class: "glyphicon-fire"}
            ];

        })();

        //on login, logout, and register this function is called, returning user data(if any)
        // any time auth status updates, add the user data to scope
        vm.auth.$onAuth(function(authData) {
            if(authData) {
                $rootScope.authData = authData;
                $rootScope.roles = Auth.rolesById(authData.uid);
            } else {
                //on logout or failure to retrieve authData, clear globals and return to home.
                $rootScope.roles = null;
                $rootScope.authData = null;
                $location.path('/')
            }
        });

        //redirect to home if authentication fails
        $rootScope.$on("$routeChangeError", function(event, next, previous, error) {
            // We can catch the error thrown when the $requireAuth promise is rejected
            // and redirect the user back to the home page
            if (error === "AUTH_REQUIRED") {
                $location.path("/");
            }
        });

        //redirect to home if user lacks required roles
        $rootScope.$on('$routeChangeStart', function(next, current) {
            vm.authorizeUser(current.roles);
        });


        function authorizeUser(access) {
            var permissionGranted = false;
            if (access) {
                for (var i = 0; i < access.length; i++) {
                    if (access[i] == '' || $rootScope.roles[access[i]]) {
                        permissionGranted = true;
                        break;
                    }
                }
            }
            //TODO: create a view for 'unauthorized/forbidden'
            if (!permissionGranted) {
                $location.path('/');
            }
        }

        function goTo(path) {
            window.location.href = path;
        }

        //ensure the correct tab is selected on navigation menu
        function selectTab(tab_id) {
            for (var i = 0; i < vm.tabs.length; i++) {
                vm.tabs[i].active = (vm.tabs[i].id === tab_id);
            }
        };

    });
