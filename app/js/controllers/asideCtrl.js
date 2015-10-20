angular.module('baseApp.controller.aside', [])
    .controller('asideCtrl', function($rootScope, $scope, ngDialog){
    "use strict";

      $rootScope.changeVisibleAside = function() {
        return $rootScope.visibleAside = $rootScope.visibleAside ? false : true;
    };

    $scope.openWindow = function (name) {
        $rootScope.table = name;

        ngDialog.open({
            template: 'template/page/' + name + '.html',
            controller:  'additionalTablesCtrl'
        });
    };

});