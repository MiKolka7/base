angular.module('baseApp.controller.case', []).controller('caseCtrl', ['$scope', function($scope){
    "use strict";

    $scope.isPage = 1;

    $scope.setPage = function (num) {
        return $scope.isPage = num;
    };

    $scope.caseMenu = [
          'Страхувальник'
        , 'ДТП, Ф-2, Потанова'
        , 'Страхова справа'
        , 'Винуватець'
        , 'Заява/Претензія'
        , 'Розрахунки'
        , 'Суд винувитий'
        , 'Суд СК'
        , 'ВДВС'
    ];


    $scope.setVdaiIndex = function (a) {
        alert(a);
    }


}]);