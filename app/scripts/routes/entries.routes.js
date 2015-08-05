/**
 * Created by reuben on 5/08/15.
 */

'use strict';

angular.module('dineApp').config(function ($routeProvider) {
    $routeProvider
        .when('/entries', {
            templateUrl: 'views/entries/list.html',
            controller: 'EntriesCtrl',
            controllerAs: 'vm'
        })
        .when('/entries/create', {
            templateUrl: 'views/entries/create.html',
            controller: 'EntriesCtrl',
            controllerAs: 'vm'
        })
        .when('/entries/:entryId/edit', {
            templateUrl: 'views/entries/edit.html',
            controller: 'EntriesCtrl',
            controllerAs: 'vm'
        })
        .when('/entries/:entryId', {
            templateUrl: 'views/entries/single.html',
            controller: 'EntriesCtrl',
            controllerAs: 'vm'
        });
});
