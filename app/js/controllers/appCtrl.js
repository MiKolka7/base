angular.module('baseApp.controller.app', []).controller('appCtrl', ['$scope', '$http', function($scope, $http){
    "use strict";

    //$http.get('/json/vdai.json').success(function(data){
    //    console.log(data);

        //data.forEach(function(item){
        //    $http.post('http://localhost:2403/vdai', item).success(function(data){});
        //});
    //});

    $scope.activePage = 'case';

    $scope.setPage = function (page) {
        //return $scope.activePage = page;
    };


    $scope.data = {
        base: {
            f2Region: 10,
            f2Status: -1
        },
        vdai: {},
        insurer: {},
        judge: {}
    };


    $http.get('http://localhost:2403/vdai').success(function(data){
        $scope.data.vdai = data;
        console.log('vdai', data);
    });

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


    $scope.$watch('data.base.f2Region', function(a){
        //alert(a);
        //$scope.data.base.numberInsuranceContract = String(a);
    });

    $scope.regions = [
        {
            id: 0,
            name: 'АР Крим'
        },
        {
            id: 1,
            name: 'Вінницька'
        },
        {
            id: 2,
            name: 'Волинська'
        },
        {
            id: 3,
            name: 'Дніпропетровська'
        },
        {
            id: 4,
            name: 'Донецька'
        },
        {
            id: 5,
            name: 'Житомирська'
        },
        {
            id: 6,
            name: 'Закарпатська'
        },
        {
            id: 7,
            name: 'Запорізька'
        },
        {
            id: 8,
            name: 'Івано-Франківська'

        },	{
            id: 9,
            name: 'Київ'
        },
        {
            id: 10,
            name: 'Київська'
        },
        {
            id: 11,
            name: 'Кіровоградська'
        },
        {
            id: 12,
            name: 'Луганська'
        },
        {
            id: 13,
            name: 'Львівська'
        },
        {
            id: 14,
            name: 'Миколаївська'
        },
        {
            id: 15,
            name: 'Одеська'
        },
        {
            id: 16,
            name: 'Полтавська'
        },
        {
            id: 17,
            name: 'Рівненська'
        },
        {
            id: 18,
            name: 'Севастополь'
        },
        {
            id: 19,
            name: 'Сумська'
        },
        {
            id: 20,
            name: 'Тернопільська'
        },
        {
            id: 21,
            name: 'Харківська'
        },
        {
            id: 22,
            name: 'Херсонська'
        },
        {
            id: 23,
            name: 'Хмельницька'
        },
        {
            id: 24,
            name: 'Черкаська'
        },
        {
            id: 25,
            name: 'Чернівецька'
        },
        {
            id: 26,
            name: 'Чернігівська'
        }
    ];

    //print

}]);