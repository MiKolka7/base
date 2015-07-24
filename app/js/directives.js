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

