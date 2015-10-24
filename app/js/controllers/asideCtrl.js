angular.module('baseApp.controller.aside', [])
    .controller('asideCtrl', function($rootScope, $scope, ngDialog){
    "use strict";

    $scope.openWindow = function (name, ctrl) {
        $rootScope.table = name;

        ctrl = ctrl || 'additionalTablesCtrl';

        ngDialog.open({
            template: 'template/page/' + name + '.html',
            controller:  ctrl + 'Ctrl'
        });
    };

});