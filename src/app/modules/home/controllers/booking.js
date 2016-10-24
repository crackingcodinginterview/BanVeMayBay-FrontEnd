define(function (require) {
    'use strict';
    var angular = require('angular');
    var controller = [
        '$scope',
        '$http',
        '$uibModal',
        '$timeout',

        function ($scope,
                  $http,
                  $uibModal,
                  $timeout) {
            var vm = this;

            function init() {
                $timeout(function () {
                    vm.spinner = false;
                    vm.list = true;
                }, 2000)
            }

            function addFlight() {
                var modalInstance = $uibModal.open({
                    templateUrl: 'home/templates/modal/addFlight.html',
                    controller: 'addFlightController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        infoFlight: vm.row
                    }
                });
            }

            function editRow() {
                var modalInstance = $uibModal.open({
                    templateUrl: 'home/templates/modal/addFlight.html',
                    controller: 'addFlightController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        infoFlight: vm.row
                    }
                });
            }

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
            vm.row = {
                rank: 'Y',
                amountSeat: '40',
                datetime: {
                    date: new Date()
                },
                cost: '10000',
                totalSeat: '100',
                placeFrom: 'Ho Chi Minh',
                placeTo: 'Ha Noi',
                id: 'BL326',
                price: 'E'
            }

            vm.spinner = true;
            vm.list = false;

            vm.init = init;
            vm.addFlight = addFlight;
            vm.editRow = editRow;
        }];
    return controller;
});