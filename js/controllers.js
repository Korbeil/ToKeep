'use strict';

/* Controllers */

var keepController = angular.module('keepController', []);

keepController.controller('KeepListCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('/js/pizzas-cat.json').success(function(data) {
      $scope.cats = data;
    });

    $scope.orderProp = 'name';
    $scope.typeProp = 'All';
  }]);
