'use strict';

angular.module('baseApp',
    [
        , 'ngRoute'
        //, 'ngFileUpload'
        , 'ngCookies'
        , 'ngAnimate'
        , 'oitozero.ngSweetAlert'
        , 'ui-notification'
        , 'chieffancypants.loadingBar'
        , 'ngDialog'

        , 'baseApp.filters'
        , 'baseApp.factory.serializeDate'

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

        , 'baseApp.controller.page.additionalTables'

        , 'baseApp.directive.menu'
        , 'baseApp.directive.aside'
        , 'baseApp.directive.case'
    ])

    .config(function(cfpLoadingBarProvider) {
        cfpLoadingBarProvider.includeSpinner = true;
    })

    .config(function(NotificationProvider) {
        NotificationProvider.setOptions({
            delay: 3000,
            startTop: 20,
            startRight: 10,
            verticalSpacing: 20,
            horizontalSpacing: 20,
            positionX: 'left',
            positionY: 'bottom'
        });
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
angular.module('baseApp.controller.app', []).controller('appCtrl', function($rootScope, $scope, $http){
    "use strict";

    //$http.get('/json/vdai.json').success(function(data){
    //    console.log(data);

        //data.forEach(function(item){
        //    $http.post('http://localhost:2403/vdai', item).success(function(data){});
        //});
    //});

    $scope.activePage = 'case';

    $scope.setPage = function (page) {
        return $scope.activePage = page;
    };


    $rootScope.data = {
        base: {
            f2Region: 10,
            f2Status: -1
        },
        vdai: {},
        insurer: {},
        judge: {}
    };


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


    $scope.$watch('data.base.f2Region', function(a){
        //alert(a);
        //$scope.data.base.numberInsuranceContract = String(a);
    });

    $rootScope.regions = [
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
angular.module('baseApp.controller.aside', [])
    .controller('asideCtrl', function($rootScope, $scope, ngDialog){
    "use strict";

    $scope.openWindow = function (name) {
        $rootScope.table = name;

        ngDialog.open({
            template: 'template/page/' + name + '.html',
            controller:  'additionalTablesCtrl'
        });
    };

});
angular.module('baseApp.controller.case', [])
    .controller('caseCtrl', function($scope, ngDialog){
    "use strict";

    //var name = 'guilty';

    ngDialog.open({
        template: 'template/case/case-item/' + name + '.html',
        controller: name + 'Ctrl'
    });


    $scope.setVdaiIndex = function (a) {
        alert(a);
    };

    $scope.openCaseItem = function (name) {
        ngDialog.open({
            template: 'template/case/case-item/' + name + '.html',
            controller: name + 'Ctrl'
        });
    };


});
angular.module('baseApp.controller.main', [])
    .controller('mainCtrl', function($scope, Notification){
    "use strict";


});
angular.module('baseApp.controller.case.actionCk', [])
    .controller('actionCkCtrl', function($scope){
        "use strict";




    });
angular.module('baseApp.controller.case.action', [])
    .controller('actionCtrl', function($scope){
        "use strict";




    });
angular.module('baseApp.controller.case.claimCk', [])
    .controller('claimCkCtrl', function($scope){
        "use strict";




    });
angular.module('baseApp.controller.case.claim', [])
    .controller('claimCtrl', function($scope){
        "use strict";




    });
angular.module('baseApp.controller.case.dvsCk', [])
    .controller('dvsCkCtrl', function($scope){
        "use strict";




    });
angular.module('baseApp.controller.case.dvs', [])
    .controller('dvsCtrl', function($scope){
        "use strict";




    });
angular.module('baseApp.controller.case.guilty', [])
    .controller('guiltyCtrl', function($scope){
        "use strict";



    });
angular.module('baseApp.controller.case.instanceCk', [])
    .controller('instanceCkCtrl', function($scope){
        "use strict";




    });
angular.module('baseApp.controller.case.instanceOwner', [])
    .controller('instanceOwnerCtrl', function($scope){
        "use strict";




    });
angular.module('baseApp.controller.case.instanceQuilty', [])
    .controller('instanceQuiltyCtrl', function($scope){
        "use strict";




    });
angular.module('baseApp.controller.case.insuranceCompany', [])
    .controller('insuranceCompanyCtrl', function($scope){
        "use strict";




    });
angular.module('baseApp.controller.case.insuranceEvent', [])
    .controller('insuranceEventCtrl', function($scope){
        "use strict";




    });
angular.module('baseApp.controller.case.insurer', [])
    .controller('insurerCtrl', function($scope){
        "use strict";




    });
angular.module('baseApp.controller.case.payment', [])
    .controller('paymentCtrl', function($scope){
        "use strict";




    });
angular.module('baseApp.controller.page.additionalTables', [])
    .controller('additionalTablesCtrl', function ($rootScope, $scope, $http, Notification, SweetAlert, serializeDate) {
        "use strict";

        var table = $rootScope.table;
        var selectItemIndex = null;


        $http.get('http://localhost:2403/' + table).success(function (data) {
            $rootScope.data[table] = serializeDate(data);
            console.log(serializeDate(data));

            if (_.isEmpty($rootScope.data[table]))
                $rootScope.data[table] = [];
        });


        /**
         * $scope.isAdd
         * true - можна додавати новий запис
         * false - редагування обраного запису
         */
        $scope.isAdd = true;

        $scope.editData = function (data, index) {
            selectItemIndex = index;
            $scope[table] = data;
            $scope.isAdd = false;

            Notification({
                title: 'Обрано для редагування',
                message: $scope[table].fullName
            });
        };

        $scope.deleteData = function (i) {
            var id = $rootScope.data[table][i].id;

            SweetAlert.swal({
                    title: "Видалити запис?",
                    text: "Відновити буде неможливо!",
                    type: "warning",
                    showCancelButton: true,
                    cancelButtonText: "Відміна",
                    showLoaderOnConfirm: true,
                    closeOnConfirm: false
                },
                function (isConfirm) {
                    if (isConfirm) {
                        $http.delete('http://localhost:2403/' + table + '/' + id).success(function (data) {
                            if (data) {
                                $rootScope.data[table].splice(selectItemIndex, 1);
                                $scope[table] = {};
                                $scope.isAdd = true;
                                swal("Успішно!", "Запис видалено", "success");

                                if (_.isEmpty($rootScope.data[table]))
                                    $rootScope.data[table] = [];
                            }
                        }).error(function () {
                            swal("Відміна", "Сталася помилка", "error");
                        });
                    }
                });
        };

        $scope.save = function () {
            console.log($scope[table]);

            $http.put('http://localhost:2403/' + table + '/' + $scope[table].id, $scope[table]).success(function (data) {
                if (data) {
                    $rootScope.data[table][selectItemIndex] = serializeDate(data);
                    Notification.success('Дані оновлено!');
                }
            }).error(function () {
                Notification.error('Виникла помилка!');
            });
        };

        $scope.add = function () {
            console.log($scope[table]);
            if (_.isEmpty($scope[table])) {
                Notification.warning('Пустий запис!');
                return false;
            }

            $http.post('http://localhost:2403/' + table, $scope[table]).success(function (data) {
                $rootScope.data[table].unshift(serializeDate(data));
                $scope[table] = {};
                Notification.success('Запис додано!');
            }).error(function (e) {
                Notification.error('Виникла помилка!');
            });
        };

        $scope.reset = function () {
            $scope[table] = {};
            $scope.isAdd = true;
        };

        $scope.selectOption = function (a) {
            $scope.selectRegion = a;
        };

    });
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
angular.module('baseApp.filters', [])

    .filter('unique', function(){
        "use strict";

        return function(arr, key) {
            var obj = {};

            if (key === 'all')
                return arr;

            arr.forEach(function(item){
                var str = item[key];
                obj[str] = true;
            });

            return Object.keys(obj);
        }
    })

    .filter('exactlyFilter', function(){
        "use strict";

        return function(arr, num, key) {
            var newArr = [];

            arr.forEach(function(item){
                if (item[key] == num)
                    newArr.push(item);
            });

            if (!newArr.length)
                newArr = arr;

            return newArr;
        }
    });

angular.module('baseApp.factory.serializeDate', [])
    .factory('serializeDate', function () {
        return function (data) {
            if (!_.isEmpty(data)) {
                data.forEach(function(item, i){
                    for (var key in item) {
                        if (key.search(/(D|d)ate/g) + 1) {
                            data[i][key] = new Date(item[key]);
                        }
                    }
                });
            }
            return data;
        }
    });