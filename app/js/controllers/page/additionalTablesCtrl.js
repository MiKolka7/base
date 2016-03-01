angular.module('baseApp.controller.page.additionalTables', [])
    .controller('additionalTablesCtrl', function ($scope, $http, Notification, SweetAlert, serializeDate) {
        "use strict";

        var table = $scope.table;
        var dbTable = angular.lowercase(table);
        var selectItemIndex = null;


        $http.get('http://localhost:2403/' + dbTable).success(function (data) {
            $scope.data[table] = serializeDate(data);
            console.log(serializeDate(data));

            if (_.isEmpty($scope.data[table]))
                $scope.data[table] = [];

            //console.log($scope);
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
            var id = $scope.data[table][i].id;

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
                                $scope.data[table].splice(selectItemIndex, 1);
                                $scope[table] = {};
                                $scope.isAdd = true;
                                swal("Успішно!", "Запис видалено", "success");

                                if (_.isEmpty($scope.data[table]))
                                    $scope.data[table] = [];
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
                    $scope.data[table][selectItemIndex] = serializeDate(data)[0];
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
                $scope.data[table].unshift(serializeDate(data)[0]);
                $scope[table] = {};
                Notification.success('Запис додано!');
            }).error(function (error) {
                if (error.errors && error.errors.username)
                    Notification.error('username ' + error.errors.username);
                else
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