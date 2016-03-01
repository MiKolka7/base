angular.module('baseApp.controller.aside', [])
    .controller('asideCtrl', function ($rootScope, $scope, ngDialog) {
        "use strict";

        $rootScope.changeVisibleAside = function () {
            return $rootScope.visibleAside = $rootScope.visibleAside ? false : true;
        };

        $scope.openWindow = function (name, ctrl) {
            $rootScope.table = name;

            ctrl = ctrl || 'additionalTables';

            ngDialog.open({
                template: 'template/page/' + name + '.html',
                controller: ctrl + 'Ctrl',
                scope: $scope
            });
        };

    });