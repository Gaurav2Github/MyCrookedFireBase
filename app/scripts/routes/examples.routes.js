/**
 * Created by reuben on 5/08/15.
 */

'use strict';

angular.module('crookedFireApp').config(function ($routeProvider) {
    $routeProvider
        .when('/examples', {
            templateUrl: 'views/examples/list.html',
            controller: 'ExamplesCtrl',
            controllerAs: 'vm',
            roles: ['admin'],
            resolve: {
                "currentAuth": function(Auth) {
                    return Auth.init().$requireAuth();
                }
            }
        })
        .when('/examples/create', {
            templateUrl: 'views/examples/create.html',
            controller: 'ExamplesCtrl',
            controllerAs: 'vm',
            roles: ['admin'],
            resolve: {
                "currentAuth": function(Auth) {
                    return Auth.init().$requireAuth();
                }
            }
        })
        .when('/examples/:exampleId/edit', {
            templateUrl: 'views/examples/edit.html',
            controller: 'ExamplesCtrl',
            controllerAs: 'vm',
            roles: ['admin'],
            resolve: {
                "currentAuth": function(Auth) {
                    return Auth.init().$requireAuth();
                }
            }
        })
        .when('/examples/:exampleId', {
            templateUrl: 'views/examples/single.html',
            controller: 'ExamplesCtrl',
            controllerAs: 'vm',
            roles: ['admin'],
            resolve: {
                "currentAuth":  function(Auth) {
                    return Auth.init().$requireAuth();
                }
            }
        });
});
