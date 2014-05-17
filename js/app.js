'use strict';

/* App Module */

var keepApp = angular.module('keepApp', [
  'ngRoute',

  'keepController'
]);

keepApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/keep', {
        templateUrl: 'partials/keep-list.html',
        controller: 'KeepListCtrl'
      }).
      otherwise({
        redirectTo: '/keep'
      });
  }]);
