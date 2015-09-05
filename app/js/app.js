'use strict';

angular.module('baseApp',
    [
        , 'ngRoute'
        //, 'ngFileUpload'
        , 'ngCookies'
        , 'ngAnimate'
        , 'chieffancypants.loadingBar'
        , 'ngDialog'

        , 'baseApp.controller.app'
        , 'baseApp.controller.main'
        , 'baseApp.controller.case'
        , 'baseApp.controller.aside'

        , 'baseApp.controller.case.insurer'
        , 'baseApp.controller.case.guilty'
        , 'baseApp.controller.case.claim'
        , 'baseApp.controller.case.action'
        , 'baseApp.controller.case.dvs'
        , 'baseApp.controller.case.insuranceEvent'
        , 'baseApp.controller.case.insuranceCompany'
        , 'baseApp.controller.case.claimCk'
        , 'baseApp.controller.case.actionCk'
        , 'baseApp.controller.case.dvsCk'
        , 'baseApp.controller.case.payment'
        , 'baseApp.controller.case.instanceCk'
        , 'baseApp.controller.case.instanceQuilty'
        , 'baseApp.controller.case.instanceOwner'

        , 'baseApp.controller.page.vdai'
        , 'baseApp.controller.page.сustomers'

        , 'baseApp.directive.menu'
        , 'baseApp.directive.aside'
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

    .config(['$routeProvider', '$locationProvider', function($routeProvider){
        'use strict';

        $routeProvider
            .when('/', {
                controller: 'mainCtrl'
            })

            .when('/case', {
                controller: 'caseCtrl'
            })

            .otherwise({
                redirectTo: '/'
            });

    }]);