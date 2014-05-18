'use strict';

/* Controllers */

var keepController = angular.module('keepController', []);

keepController.controller('KeepListCtrl', ['$scope', '$http',
    function($scope, $http) {
        $http.get('/js/keep-list.json').success(function(data) {
            // seeding keeplist
            $scope.keeplist = data;

            // seeding taglist
            var tags = [];
            for(var element in data) {
                for(var tag in data[element].tags) {
                    if(tags.indexOf(tag) == -1) {
                        tags.push({
                            name: data[element].tags[tag]
                        });
                    }
                }
            }
            $scope.taglist = tags;

            // seeding langlist
            var langs = [];
            for(var element in data) {
                var c = data[element];
                if(c.language && langs.indexOf(c.language) == -1) {
                    langs.push(c.language);
                }
            }
            $scope.langlist = langs;

        });

        $scope.addSomethingToKeep = function(title, url, lang, desc, tag) {
            var struct = {
                "title":title,
                "url":url,
                "language":lang,
                "description":desc,
                "tags":tag
            };
            $scope.keeplist.push(struct);
            $scope.savingData();
        };
        $scope.savingData = function() {
            $http.get('/saveData.php?data=' + JSON.stringify($scope.keeplist));
        };
    }
]);
