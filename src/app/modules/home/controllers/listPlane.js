define(function (require) {
    'use strict';
    var angular = require('angular');
    var controller = [
        '$scope',
        '$http',
        '$location',
        '$uibModal',

        function ($scope,
                  $http,
                  $location,
                  $uibModal) {
            var vm = this;

            function pickPlane(row) {
                var modalInstance = $uibModal.open({
                    templateUrl: 'home/templates/modal/pickPlane.html',
                    controller: 'pickPlaneController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        pickedPlane: row
                    }
                });

                modalInstance.result.then(function (resp) {
                    $location.path('/list');
                }, function () {

                });
            }

            vm.datetimePlane = new Date();
            vm.datetimePlane = vm.datetimePlane.toDateString();
            vm.listPlaneData = [
                {
                    'rank': 'Y',
                    'amountSeat': '40',
                    'date': vm.datetimePlane,
                    'time': '6:05 PM',
                    'cost': '10000',
                    'totalSeat': '100',
                    'placeFrom': 'Ho Chi Minh',
                    'placeTo': 'Ha Noi',
                    'id': 'BL326',
                    'price': 'E'
                }
            ];

            vm.pickPlane = pickPlane;
        }];
    return controller;
});