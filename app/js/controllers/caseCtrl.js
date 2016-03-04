angular.module('baseApp.controller.case', [])
    .controller('caseCtrl', function($scope, $controller, ngDialog, SweetAlert){
    "use strict";

    //відкриття форми при роботі над конкретною формою
    //var name = 'guilty';
    //ngDialog.open({
    //    template: 'template/case/case-item/' + name + '.html',
    //    controller: name + 'Ctrl'
    //});

    $scope.setVdaiIndex = function (a) {
        alert(a);
    };

    $scope.stopEventPropagation = function (e) {
      e.stopPropagation();
    };

    $scope.addNewGuilty = function (e) {
        e.stopPropagation();

        SweetAlert.swal({
            title: "Додати нового учасника ДТП?",
            type: "info",
            showCancelButton: true,
            cancelButtonText: "Відміна",
            showLoaderOnConfirm: true,
            closeOnConfirm: true
          },
          function (isConfirm) {
            if (isConfirm) {
              $scope.data.case.participantCrash.push({});
              $scope.data.case.insuranceCompany.push({});
            }
          });
    };

    $scope.deleteGuilty = function (e, i) {
        e.stopPropagation();

        SweetAlert.swal({
            title: "Видалити учасника ДТП?",
            text: "Відновити буде неможливо!",
            type: "warning",
            showCancelButton: true,
            cancelButtonText: "Відміна",
            showLoaderOnConfirm: true,
            closeOnConfirm: true
          },
          function (isConfirm) {
            if (isConfirm && i) {
              $scope.data.case.participantCrash.splice(i, 1);
              $scope.data.case.insuranceCompany.splice(i, 1);
            }
          }).error(function () {
            swal("Відміна", "Сталася помилка", "error");
          });

    };



    $scope.openCaseItem = function (name, i) {
        $scope.guiltyIndex = i;
        ngDialog.open({
            scope: $scope,
            template: 'template/case/case-item/' + name + '.html',
            controller: name + 'Ctrl'
        });
    };


});