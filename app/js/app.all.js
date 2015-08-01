'use strict';

angular.module('baseApp',
    [
        , 'ngRoute'
        //, 'ngFileUpload'
        , 'ngCookies'
        , 'ngAnimate'
        , 'chieffancypants.loadingBar'

        , 'baseApp.controller.app'
        , 'baseApp.controller.main'
        , 'baseApp.controller.case'

        , 'baseApp.directive.menu'
        , 'baseApp.directive.case'
    ])

    .config(function(cfpLoadingBarProvider) {
        cfpLoadingBarProvider.includeSpinner = true;
    })

    .run(function ($rootScope, $location, $cookieStore) {
        $rootScope.$on("$routeChangeStart", function (event, next, current) {
            //var url = $location.path().split('/')[1];
            //
            //if (url === 'registration') {
            //    return false;
            //}
            //
            //if (!$cookieStore.get('authorization')) {
            //        $location.url("/login");
            //}
            //else {
            //    if (!$rootScope.userName) {
            //
            //        $rootScope.jury = $cookieStore.get('jury');
            //        $rootScope.admin = $cookieStore.get('admin');
            //        $rootScope.idJury = $cookieStore.get('idJury');
            //        $rootScope.userName = $cookieStore.get('login');
            //
            //    }
            //}
        });
    })

    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
        'use strict';

        //$locationProvider.html5Mode({
        //    enabled: true,
        //    requireBase: false
        //});

        $routeProvider
            .when('/', {
                //templateUrl: '/template/main.html',
                controller: 'mainCtrl'
            })

            .when('/case', {
            //    templateUrl: '/template/case.html',
                controller: 'caseCtrl'
            })

            .otherwise({
                redirectTo: '/'
            });

    }]);
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
angular.module('baseApp.controller.case', []).controller('caseCtrl', ['$scope', function($scope){
    "use strict";

    $scope.isPage = 1;

    $scope.setPage = function (num) {
        return $scope.isPage = num;
    };

    $scope.caseMenu = [
          'Страхувальник'
        , 'ДТП, Ф-2, Потанова'
        , 'Страхова справа'
        , 'Винуватець'
        , 'Заява/Претензія'
        , 'Розрахунки'
        , 'Суд винувитий'
        , 'Суд СК'
        , 'ВДВС'
    ];


    $scope.setVdaiIndex = function (a) {
        alert(a);
    }


}]);
angular.module('baseApp.controller.main', []).controller('mainCtrl', ['$scope', function($scope){
    "use strict";


}]);
'use strict';

/* Directives */

angular.module('baseApp.directive.menu', [])
    .directive('headerMenu', function() {
        return {
            restrict: 'EA',
            templateUrl: 'template/menu.html'
        }
    });

angular.module('baseApp.directive.case', [])

    .directive('pageMain', function() {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: 'template/main.html'
        }
    })

    .directive('pageCase', function() {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: 'template/case.html'
        }
    })


    .directive('caseHeader', function() {
        return {
            restrict: 'EA',
            templateUrl: 'template/case/header.html'
        }
    })

    .directive('caseBody', function() {
        return {
            restrict: 'EA',
            templateUrl: 'template/case/body.html'
        }
    })

    .directive('caseFooter', function() {
        return {
            restrict: 'EA',
            templateUrl: 'template/case/footer.html'
        }
    })


    .directive('insurer', function() {
        return {
            restrict: 'EA',
            templateUrl: 'template/case/insurer.html'
        }
    })

    .directive('formTwo', function() {
        return {
            restrict: 'EA',
            templateUrl: 'template/case/f2.html'
        }
    })

    .directive('insurerCase', function() {
        return {
            restrict: 'EA',
            templateUrl: 'template/case/insurer-case.html'
        }
    })

    .directive('guilty', function() {
        return {
            restrict: 'EA',
            templateUrl: 'template/case/guilty.html'
        }
    })

    .directive('claim', function() {
        return {
            restrict: 'EA',
            templateUrl: 'template/case/сlaim.html'
        }
    })

    .directive('payment', function() {
        return {
            restrict: 'EA',
            templateUrl: 'template/case/payment.html'
        }
    })

    .directive('courtQuilty', function() {
        return {
            restrict: 'EA',
            templateUrl: 'template/case/court-guilty.html'
        }
    })

    .directive('courtCk', function() {
        return {
            restrict: 'EA',
            templateUrl: 'template/case/court-ck.html'
        }
    })

    .directive('vdvs', function() {
        return {
            restrict: 'EA',
            templateUrl: 'template/case/vdvs.html'
        }
    });


'use strict';

/* Filters */

'use strict';

/* Services */

