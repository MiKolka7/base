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

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

        $routeProvider
            .when('/', {
                templateUrl: '/template/main.html',
                controller: 'mainCtrl'
            })

            .when('/case', {
                templateUrl: '/template/case.html',
                controller: 'caseCtrl'
            })

            .otherwise({
                redirectTo: '/'
            });

    }]);