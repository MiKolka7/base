angular.module('baseApp.controller.case.claimCk', [])
    .controller('claimCkCtrl', function($rootScope, $scope, $http) {
        "use strict";

        $rootScope.addons = [
            {
                title: "Копія повідомлення про настання події, що має ознаки страхового випадку за договором добровільного страхування транспортного засобу"
            },
            {
                title: "Копія акту огляду ТЗ"
            },
            {
                title: "Копія Калькуляції"
            },
            {
                title: "Копія Модуля розрахунку збитків"
            },
            {
                title: "Копія Звіт експерта"
            },
            {
                title: "Копія Фотододатки"
            },
            {
                title: "Копія Договору страхування №2744а/12зп від 17.09.2012"
            },
            {
                title: "Копія Заяви на страхування"
            },
            {
                title: "Копія свідоцтва про реєстрацію ТЗ та посвідчення водія"
            },
            {
                title: "Копія паспорту та коду страхувальника"
            },
            {
                title: "Копія паспорту та коду водія"
            },
            {
                title: "Копія первинної довідки ДАЇ"
            },
            {
                title: "Копія роздруківки з бази МТСБУ"
            },
            {
                title: "Копія Довіреності № 3179/18 від 17.12.2013 року"
            }
        ];

        $scope.addDoc = function () {
            if ($scope.doc.title === '') return;
            $scope.doc.delete = true;
            $rootScope.addons.push($scope.doc);
            $scope.doc = {}
        };

        $scope.changeStatus = function(idx, checked) {
            $rootScope.addons[idx].active = checked
        };

        $scope.deleteData = function(idx) {
            console.log(idx);
            $rootScope.addons.splice(idx, 1)
        }

    });