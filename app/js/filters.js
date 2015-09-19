angular.module('baseApp.filters', [])

    .filter('unique', function(){
        "use strict";

        return function(arr, key) {
            var obj = {};

            if (_.isEmpty(arr))
                return false;

            if (key === 'all')
                return arr;

            arr.forEach(function(item){
                var str = item[key];

                if (str)
                    obj[str] = true;
            });

            return Object.keys(obj);
        }
    })

    .filter('exactlyFilter', function(){
        "use strict";

        return function(arr, key, num) {
            var newArr = [];

            if (_.isEmpty(arr))
                return false;

            arr.forEach(function(item){
                if (item[key] == num)
                    newArr.push(item);
            });

            if (!newArr.length)
                newArr = arr;

            return newArr;
        }
    });