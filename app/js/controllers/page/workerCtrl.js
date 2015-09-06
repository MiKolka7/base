angular.module('baseApp.controller.page.worker', [])
    .controller('workerCtrl', function($rootScope, $scope, $http, Notification, SweetAlert){
        "use strict";

        var selectItemIndex;

        /**
         * $scope.isAdd
         * true - можна додавати новий запис
         * false - редагування обраного запису
         */
        $scope.isAdd = true;

        $scope.editData = function (data, index) {
            selectItemIndex = index;
            $scope.vdai = data;
            $scope.isAdd = false;

            Notification({
                title: 'Обрано для редагування',
                message: $scope.vdai.fullName
            });
        };

        $scope.deleteData = function (i) {
            var id = $rootScope.data.vdai[i].id;

            SweetAlert.swal({
                    title: "Видалити запис?",
                    text: "Відновити буде неможливо!",
                    type: "warning",
                    showCancelButton: true,
                    cancelButtonText: "Відміна",
                    showLoaderOnConfirm: true,
                    closeOnConfirm: false
                },
                function(isConfirm){
                    if (isConfirm) {
                        $http.delete('http://localhost:2403/vdai/' + id).success(function(data){
                            if (data) {
                                $rootScope.data.vdai.splice(selectItemIndex, 1);
                                $scope.vdai = {};
                                swal("Успішно!", "Запис видалено", "success");
                            }
                        }).error(function(){
                            swal("Відміна", "Сталася помилка", "error");
                        });
                    }
                });
        };

        $scope.save = function () {
            $http.put('http://localhost:2403/vdai/' + $scope.vdai.id, $scope.vdai).success(function(data){
                if (data) {
                    $rootScope.data.vdai[selectItemIndex] = data;
                    Notification.success('Дані оновлено!');
                }
            }).error(function(){
                Notification.error('Виникла помилка!');
            });
        };

        $scope.add = function () {
            $http.post('http://localhost:2403/vdai', $scope.vdai).success(function(data){
                $rootScope.data.vdai.unshift(data);
                Notification.success('Запис додано!');
            }).error(function(){
                Notification.error('Виникла помилка!');
            });
        };

        $scope.reset = function () {
            $scope.vdai = {};
            $scope.isAdd = true;
        };


        $scope.selectOption = function (a) {
            $scope.selectRegion = a;
        }


    });