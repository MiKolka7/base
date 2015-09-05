angular.module('baseApp.controller.aside', [])
    .controller('asideCtrl', function($scope, ngDialog){
    "use strict";

    $scope.openWindow = function (name) {
        ngDialog.open({
            template: 'template/page/' + name + '.html',
            controller: name + 'Ctrl'
        });
    };

});