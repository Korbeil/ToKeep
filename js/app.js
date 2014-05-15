'use strict';

/* App Module */

var pizzaApp = angular.module('pizzaApp', [
  'ngRoute',

  'pizzaController',
  'pizzaFilters'
]);

pizzaApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/pizzas', {
        templateUrl: 'partials/pizza-list.html',
        controller: 'PizzaListCtrl'
      }).
      otherwise({
        redirectTo: '/pizzas'
      });
  }]);
