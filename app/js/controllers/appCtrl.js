angular.module('baseApp.controller.app', []).controller('appCtrl', function ($scope, $http, serializeDate) {
    "use strict";

    //$http.get('/json/vdai.json').success(function(data){
    //    console.log(data);
    //
    //    data.forEach(function(item){
    //        $http.post('http://localhost:2403/vdai', item).success(function(data){});
    //    });
    //});

    $scope.activePage = 'case';

    $scope.setPage = function (page) {
        return $scope.activePage = page;
    };


    $scope.data = {
        base: {
            f2Region: 10,
            f2Status: "-1"
        },
        case: {
        }
    };

    // making ng-repeat create first item of Guilty & Insurance company @case-main.html
    if(!($scope.data.case.participantCrash)){
        $scope.data.case.participantCrash = [{}];
        $scope.data.case.insuranceCompany = [{}];
    }

    var additionalTables = [
        'vdai',
        'insuranceCompany',
        'stateEnforcement',
        'stateExecutiveService',
        'judge',
        'court',
        'affiliate',
        'customers',
        'users'
    ];

    _.forEach(additionalTables, function(table) {
        $http.get('http://localhost:2403/' + table.toLowerCase()).success(function (data) {
            $scope.data[table] = serializeDate(data);

            if (_.isEmpty($scope.data[table]))
                $scope.data[table] = [];
        });
    });



    $scope.pages = [
        {
            name: 'main',
            title: ' Головна',
            icon: 'home'
        },
        {
            name: 'case',
            title: ' Справа #',
            icon: 'file'
        },
        {
            name: 'search',
            title: ' Пошук',
            icon: 'search'
        }
    ];


    //$scope.$watch('data.base.f2Region', function (a) {
        //alert(a);
        //$scope.data.base.numberInsuranceContract = String(a);
    //});

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

        },
        {
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

});