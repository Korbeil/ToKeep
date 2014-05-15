'use strict';

/* Filters */

angular.module('pizzaFilters', [])
.filter('type', function() {
  return function(items, field) {
    var result = [];
    if(field === 'All') {
      result = items;
    } else {
      angular.forEach(items, function(value, key) {
        if(value["category"] == field) {
          result.push(value);
        }
      });
    }
    return result;
  };
});
