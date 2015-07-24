angular.module('baseApp.controller.app', []).controller('appCtrl', ['$scope', function($scope){
    "use strict";


    $scope.setPage = function (page) {
        return $scope.activePage = page;
    };

    $scope.pages = [
        {
            name: 'main',
            title: ' Головна',
            icon: 'home'
        },
        {
            name: 'case',
            title: 'Справа #',
            icon: 'file'
        },
        {
            name: 'search',
            title: ' Пошук',
            icon: 'search'
        }
    ];

    //print

}]);