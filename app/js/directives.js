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

    .directive('toggleBlock', function() {
        return {
            restrict: 'A',
            scope: true,
            link: function (scope) {
                scope.toggleBlock = function () {
                    this.toggleInput = !this.toggleInput;
                    return this.toggleInput;
                };
            }
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
            templateUrl: 'template/aside.html'
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