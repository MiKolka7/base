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
angular.module('baseApp.controller.case', []).controller('caseCtrl', ['$scope', function($scope){
    "use strict";

    $scope.isPage = 0;

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
    });


'use strict';

/* Filters */

'use strict';

/* Services */

