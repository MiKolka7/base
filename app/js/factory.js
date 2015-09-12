
angular.module('baseApp.factory.serializeDate', [])
    .factory('serializeDate', function () {
        return function (data) {
            if (!_.isEmpty(data)) {
                data.forEach(function(item, i){
                    for (var key in item) {
                        if (key.search(/(D|d)ate/g) + 1) {
                            data[i][key] = new Date(item[key]);
                        }
                    }
                });
            }
            return data;
        }
    });