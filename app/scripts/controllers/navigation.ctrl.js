/**
 * Created by reuben on 5/08/15.
 */

/**
 * @ngdoc function
 * @name dineApp.controller:NavigationCtrl
 * @description
 * # NavigationCtrl
 * Controller of the dineApp
 */

"use strict";

angular.module('dineApp')
    .controller('NavigationCtrl', function ($rootScope, $location, $routeParams, Auth) {

        var vm = this;
        vm.selectTab = selectTab;
        vm.auth = Auth;

        $rootScope.goTo = goTo;

        // any time auth status updates, add the user data to scope
        vm.auth.$onAuth(function(authData) {
            $rootScope.authData = authData;
        });

        //anonymous function,called on initialisation
        (function () {

            vm.tabs = [
                {id: 'home-tab', href: '/#/', roles: [], active: false, title: "  HOME", icon_class: "glyphicon-home"},
                {id: 'entries-tab', href: '/#/entries', roles: [], active: false, title: "  ENTRIES", icon_class: "glyphicon-book"},
                {id: 'about-tab', href: '/#/about', roles: [], active: false, title: "  ABOUT", icon_class: "glyphicon-glass"}
            ];
        })();

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