'use strict';

/**
 * @ngdoc overview
 * @name crookedFireApp
 * @description
 * # crookedFireApp
 *
 * Main module of the application.
 */
angular
  .module('crookedFireApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase',
    'angular-loading-bar',
    'crookedFireApp.services',
    'crookedFireApp.filters',
    'crookedFireApp.directives'
  ]);
