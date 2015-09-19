angular.module('baseApp.controller.page.additionalTables', [])
    .controller('additionalTablesCtrl', function ($rootScope, $scope, $http, Notification, SweetAlert, serializeDate) {
        "use strict";

        var table = $rootScope.table;
        var dbTable = angular.lowercase(table);
        var selectItemIndex = null;


        $http.get('http://localhost:2403/' + dbTable).success(function (data) {
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
            $scope[table] = _.clone(data);
            $scope.isAdd = false;

            Notification({
                message: 'Обрано запис!'
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
                        $http.delete('http://localhost:2403/' + dbTable + '/' + id).success(function (data) {
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

            $http.put('http://localhost:2403/' + dbTable + '/' + $scope[table].id, $scope[table]).success(function (data) {
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

            $http.post('http://localhost:2403/' + dbTable, $scope[table]).success(function (data) {
                $rootScope.data[table].unshift(serializeDate(data));
                $scope[table] = {};
                Notification.success('Запис додано!');
            }).error(function () {
                Notification.error('Виникла помилка!');
            });
        };

        $scope.reset = function () {
            $scope[table] = {};
            $scope.isAdd = true;
        };

        $scope.selectOption = function (val, key) {
            $scope.selectValue = val;
            $scope.selectKey = key;
        };

    });