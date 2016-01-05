angular.module('baseApp.controller.case.insurer', [])
    .controller('insurerCtrl', function($scope){
        "use strict";

        $scope.$watch('data.case.insurer.insurerIsDriver', function(value) {
            if (!$scope.data.case.insurer) return;

            if(value) {
                $scope.data.case.insurer.driverSurname = $scope.data.case.insurer.surname;
                $scope.data.case.insurer.driverName = $scope.data.case.insurer.name;
                $scope.data.case.insurer.DriverName2 = $scope.data.case.insurer.name2;
            } else {
                $scope.data.case.insurer.driverSurname = "";
                $scope.data.case.insurer.driverName = "";
                $scope.data.case.insurer.DriverName2 = "";
            }
        });

        $scope.$watch('data.case.insurer.insurerIsOwner', function(value) {
            if (!$scope.data.case.insurer) return;

            if(value) {
                $scope.data.case.insurer.ownerSurname = $scope.data.case.insurer.surname;
                $scope.data.case.insurer.ownerName = $scope.data.case.insurer.name;
                $scope.data.case.insurer.ownerName2 = $scope.data.case.insurer.name2;
            } else {
                $scope.data.case.insurer.ownerSurname = "";
                $scope.data.case.insurer.ownerName = "";
                $scope.data.case.insurer.ownerName2 = "";
            }
        });



    });