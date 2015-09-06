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
    })

    .directive('caseMain', function() {
        return {
            restrict: 'EA',
            templateUrl: 'template/case/case-main.html'
        }
    });



angular.module('baseApp.directive.aside', [])
    .directive('aside', function(ngDialog) {
        return {
            restrict: 'A',
            templateUrl: 'template/aside.html',
        }
    })

    .directive('scrollTop', function() {
        return {
            restrict: 'A',
            link: function (scope, element, attr) {
                element[0].onclick = function () {
                    $('body').animate({scrollTop: 0}, 500);
                }
            }
        }
    });