angular.module('baseApp.controller.page.filia', [])
    .controller('filiaCtrl', function($rootScope, $scope, $http){
        "use strict";


        var selectItemIndex;
        $scope.isAdd = true;

        $scope.editData = function (data, index) {
            selectItemIndex = index;
            $scope.affiliate = data;
            $scope.isAdd = false;
        };

        $scope.save = function () {
            $http.put('http://localhost:2403/affiliate/' + $scope.affiliate.id, $scope.affiliate).success(function(data){
                if (data) {
                    $scope.affiliate[selectItemIndex] = data;
                }
            });
        };

        $scope.add = function () {
            $http.post('http://localhost:2403/affiliate', $scope.vdai).success(function(data){
                $scope.affiliate.unshift(data);
                console.log(data);
            });
        };

        $scope.reset = function () {
            $scope.affiliate = {};
            $scope.isAdd = true;
        };


    });