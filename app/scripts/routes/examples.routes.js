/**
 * Created by reuben on 5/08/15.
 */

'use strict';

angular.module('crookedFireApp').config(function ($routeProvider) {
    $routeProvider
        .when('/examples', {
            templateUrl: 'views/examples/list.html',
            controller: 'ExamplesCtrl',
            controllerAs: 'vm'
        })
        .when('/examples/create', {
            templateUrl: 'views/examples/create.html',
            controller: 'ExamplesCtrl',
            controllerAs: 'vm'
        })
        .when('/examples/:exampleId/edit', {
            templateUrl: 'views/examples/edit.html',
            controller: 'ExamplesCtrl',
            controllerAs: 'vm'
        })
        .when('/examples/:exampleId', {
            templateUrl: 'views/examples/single.html',
            controller: 'ExamplesCtrl',
            controllerAs: 'vm'
        });
});
