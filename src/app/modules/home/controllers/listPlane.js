define(function (require) {
    'use strict';
    var angular = require('angular');
    var controller = [
        '$scope',
        '$http',
        '$location',
        '$uibModal',
        '$timeout',
        '$state',
        '$stateParams',

        function ($scope,
                  $http,
                  $location,
                  $uibModal,
                  $timeout,
                  $state,
                  $stateParams) {
            var vm = this;

            function init() {
                $timeout(function () {
                    vm.spinner = false;
                    vm.list = true;
                }, 2000)
            }

            function pickPlane(row) {
                var modalInstance = $uibModal.open({
                    templateUrl: 'home/templates/modal/pickPlane.html',
                    controller: 'pickPlaneController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        selectedPlane: row
                    }
                });

                modalInstance.result.then(function (resp) {
                    $location.path('/confirm');
                }, function () {

                });
            }

            function editSearch() {
                $state.go('base.search', {param: vm.param});
            }

            vm.datetimePlaneGo = new Date();
            vm.datetimePlaneGo = vm.datetimePlaneGo.toDateString();
            vm.listPlaneData = [
                {
                    'rank': 'Y',
                    'amountSeat': '40',
                    'date': vm.datetimePlaneGo,
                    'time': '6:05 PM',
                    'cost': '10000',
                    'totalSeat': '100',
                    'placeFrom': 'Ho Chi Minh',
                    'placeTo': 'Ha Noi',
                    'id': 'BL326',
                    'price': 'E'
                },
                {
                    'rank': 'Y',
                    'amountSeat': '40',
                    'date': vm.datetimePlaneGo,
                    'time': '6:05 PM',
                    'cost': '10000',
                    'totalSeat': '100',
                    'placeFrom': 'Ho Chi Minh',
                    'placeTo': 'Ha Noi',
                    'id': 'BL326',
                    'price': 'E'
                },
                {
                    'rank': 'Y',
                    'amountSeat': '40',
                    'date': vm.datetimePlaneGo,
                    'time': '6:05 PM',
                    'cost': '10000',
                    'totalSeat': '100',
                    'placeFrom': 'Ho Chi Minh',
                    'placeTo': 'Ha Noi',
                    'id': 'BL326',
                    'price': 'E'
                }
            ];
            vm.spinner = true;
            vm.list = false;
            vm.param = $stateParams.param;

            vm.init = init;
            vm.pickPlane = pickPlane;
            vm.editSearch = editSearch;
        }];
    return controller;
});