'use strict';

/* Controllers */

var pizzaController = angular.module('pizzaController', []);

pizzaController.controller('PizzaListCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('/js/pizzas-cat.json').success(function(data) {
      $scope.cats = data;
    });

    $scope.orderProp = 'name';
    $scope.typeProp = 'All';
  }]);
