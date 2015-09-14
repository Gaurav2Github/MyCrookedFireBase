/**
 * Created by gaurav on 9/10/15.
 */
'use strict';

angular.module('crookedFireApp').config(function ($routeProvider) {
  $routeProvider
    .when('/projector', {
      templateUrl: 'views/projector/projector.html',
      controller: 'ProjectorCtrl',
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

