angular.module('baseApp.controller.case', [])
    .controller('caseCtrl', function($scope, ngDialog){
    "use strict";

    //$scope.isPage = 1;

    $scope.setPage = function (num) {
        return $scope.isPage = num;
    };

    var name = 'insurer';

    ngDialog.open({
        template: 'template/case/case-item/' + name + '.html',
        controller: name + 'Ctrl'
    });
    //$scope.caseMenu = [
    //      'Страхувальник'
    //    , 'ДТП, Ф-2, Потанова'
    //    , 'Страхова справа'
    //    , 'Винуватець'
    //    , 'Заява/Претензія'
    //    , 'Розрахунки'
    //    , 'Суд винувитий'
    //    , 'Суд СК'
    //    , 'ВДВС'
    //];


    $scope.setVdaiIndex = function (a) {
        alert(a);
    };

    $scope.openCaseItem = function (name) {
        ngDialog.open({
            template: 'template/case/case-item/' + name + '.html',
            controller: name + 'Ctrl'
        });
    };


});