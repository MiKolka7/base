angular.module('baseApp.controller.page.vdai', [])
    .controller('vdaiCtrl', function($rootScope, $scope, $http){
        "use strict";

        var selectItemIndex;
        $scope.isAdd = true;

        $scope.editData = function (data, index) {
            selectItemIndex = index;
            $scope.vdai = data;
            $scope.isAdd = false;
        };

        $scope.save = function () {
            $http.put('http://localhost:2403/vdai/' + $scope.vdai.id, $scope.vdai).success(function(data){
                if (data) {
                    $rootScope.data.vdai[selectItemIndex] = data;
                }
            });
        };

        $scope.add = function () {
            $http.post('http://localhost:2403/vdai', $scope.vdai).success(function(data){
                $rootScope.data.vdai.unshift(data);
                console.log(data);
            });
        };



        $scope.reset = function () {
            $scope.vdai = {};
            $scope.isAdd = true;
        };


    });