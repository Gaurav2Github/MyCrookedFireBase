/**
 * Created by gaurav on 9/9/15.
 */

'use strict';

angular.module('crookedFireApp').config(function ($routeProvider) {
  $routeProvider
    .when('/calc', {
      templateUrl: 'views/calc/calculator.html',
      controller: 'CalcCtrl',
      controllerAs: 'vm',
      roles: ['']
      //roles: ['user', 'admin'],
      //resolve: {
      //  "currentAuth": function(Auth) {
      //    return Auth.init().$requireAuth();
      //  }
      //}
    });
});

