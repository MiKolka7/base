angular.module('baseApp.controller.case.guilty', [])
    .controller('guiltyCtrl', function($scope, $http, serializeDate){
        "use strict";

        //$scope.index = $scope.guiltyIndex;

      $scope.selectOption = function (val, key) {
          $scope.selectValue = val;
          $scope.selectKey = key;
      };

    var additionalResources = [
      'districtCourt'
    ];

    _.forEach(additionalResources, function(resource) {
      $http.get('http://localhost:2403/' + resource.toLowerCase()).success(function (data) {
        $scope.data[resource] = serializeDate(data);

        if (_.isEmpty($scope.data[resource]))
          $scope.data[resource] = [];
      });
    });

    });