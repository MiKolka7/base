angular.module('baseApp.controller.case', [])
    .controller('caseCtrl', function($scope, ngDialog){
    "use strict";

    var name = 'instanceQuilty';

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