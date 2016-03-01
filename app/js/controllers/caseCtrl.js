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

    $scope.guilty = {
      collection: [
        {}
      ]
    };

    $scope.addNewGuilty = function (e) {
        e.stopPropagation();

        SweetAlert.swal({
            title: "Додати нового учасника ДТП?",
            showCancelButton: true,
            cancelButtonText: "Відміна",
            showLoaderOnConfirm: true,
            closeOnConfirm: true
          },
          function (isConfirm) {
            if (isConfirm) {
              $scope.guilty.collection.push({});
            }
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