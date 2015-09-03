angular.module('baseApp.controller.case', [])
    .controller('caseCtrl', function($scope, ngDialog){
    "use strict";

    var name = 'instanceCk';

    ngDialog.open({
        template: 'template/case/case-item/' + name + '.html',
        controller: name + 'Ctrl'
    });


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