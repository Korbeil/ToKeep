'use strict';

/* Filters */

angular.module('keepFilters', [])
.filter('tag', function() {
    return function(items, field) {
        if(field === undefined) {
            return items;
        } else {
            var r = [];
            for(var i in items) {
                var current = items[i];
                var isOkay = true;

                for(var j in field) {
                    var look = field[j];
                    if(!(current.tags.indexOf(look) > -1 && r.indexOf(look) == -1)) {
                        isOkay = false;
                    }
                }

                if(isOkay) {
                    r.push(current);
                }
            }
            return r;
        }
    };
})
.filter('language', function() {
    return function(items, field) {
        if(field === undefined) {
            return items;
        } else {
            var r = [];
            for(var i in items) {
                var current = items[i];

                if(current.language.indexOf(field) > -1 && r.indexOf(current.language) == -1) {
                    r.push(current);
                }
            }
            return r;
        }
    };
});
