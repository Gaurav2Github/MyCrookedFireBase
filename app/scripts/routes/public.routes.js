/**
 * Created by reuben on 5/08/15.
 */

'use strict';

angular.module('crookedFireApp').config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl',
            controllerAs: 'main',
            roles: ['']
        })
        .otherwise({
            redirectTo: '/'
        });
});