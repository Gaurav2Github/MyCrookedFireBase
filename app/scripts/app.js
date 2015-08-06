'use strict';

/**
 * @ngdoc overview
 * @name dineApp
 * @description
 * # dineApp
 *
 * Main module of the application.
 */
angular
  .module('dineApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase',
    'angular-loading-bar',
    'dineApp.services',
    'dineApp.filters',
    'dineApp.directives'
  ]);
