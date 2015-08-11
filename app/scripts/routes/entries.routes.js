/**
 * Created by reuben on 5/08/15.
 */

'use strict';

angular.module('crookedFireApp').config(function ($routeProvider) {
    $routeProvider
        .when('/entries', {
            templateUrl: 'views/entries/list.html',
            controller: 'EntriesCtrl',
            controllerAs: 'vm',
            roles: ['user', 'admin'],
            resolve: {
                "currentAuth": function(Auth) {
                    return Auth.init().$requireAuth();
                }
            }
        })
        .when('/entries/create', {
            templateUrl: 'views/entries/create.html',
            controller: 'EntriesCtrl',
            controllerAs: 'vm',
            roles: ['user', 'admin'],
            resolve: {
                "currentAuth": function(Auth) {
                    return Auth.init().$requireAuth();
                }
            }
        })
        .when('/entries/:entryId/edit', {
            templateUrl: 'views/entries/edit.html',
            controller: 'EntriesCtrl',
            controllerAs: 'vm',
            roles: ['user', 'admin'],
            resolve: {
                "currentAuth": function(Auth) {
                    return Auth.init().$requireAuth();
                }
            }
        })
        .when('/entries/:entryId', {
            templateUrl: 'views/entries/single.html',
            controller: 'EntriesCtrl',
            controllerAs: 'vm',
            roles: ['user', 'admin'],
            resolve: {
                "currentAuth": function(Auth) {
                    return Auth.init().$requireAuth();
                }
            }
        });
});
