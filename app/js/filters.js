angular.module('baseApp.filters', [])

    .filter('unique', function(){
        "use strict";

        return function(arr, key) {
            var obj = {};

            if (key === 'all')
                return arr;

            arr.forEach(function(item){
                var str = item[key];
                obj[str] = true;
            });

            return Object.keys(obj);
        }
    })

    .filter('exactlyFilter', function(){
        "use strict";

        return function(arr, num, key) {
            var newArr = [];

            arr.forEach(function(item){
                if (item[key] == num)
                    newArr.push(item);
            });

            if (!newArr.length)
                newArr = arr;

            return newArr;
        }
    });