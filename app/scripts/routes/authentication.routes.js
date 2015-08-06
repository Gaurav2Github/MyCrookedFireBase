/**
 * Created by reuben on 5/08/15.
 */

'use strict';

angular.module('crookedFireApp').config(function ($routeProvider) {
    $routeProvider
        .when('/auth/login', {
            templateUrl: 'views/authentication/login.html',
            controller: 'AuthenticationCtrl',
            controllerAs: 'vm'
        })
        .when('/auth/register', {
            templateUrl: 'views/authentication/register.html',
            controller: 'AuthenticationCtrl',
            controllerAs: 'vm'
        });
});
