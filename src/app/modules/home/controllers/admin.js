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

            function removeRow(row) {
                var index = vm.listPlaneData.indexOf(row);
                vm.listPlaneData.splice(index, 1);
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

                modalInstance.result.then(function (resp) {
                    vm.listPlaneData.push(resp);
                }, function () {

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

                modalInstance.result.then(function (resp) {
                   vm.listPlaneData.push(resp);
                }, function () {

                });
            }

            vm.datetimePlaneGo = new Date();
            vm.listPlaneData = [
                {
                    'rank': 'E',
                    'amountSeat': '40',
                    'date': vm.datetimePlaneGo,
                    'time': '6:00 PM',
                    'cost': '100000',
                    'totalSeat': '100',
                    'placeFrom': {
                        name: 'Ho Chi Minh',
                        code: 'HCM'
                    } ,
                    'placeTo': {
                        name: 'Tan Son Nhat',
                        code: 'TSN'
                    } ,
                    'id': 'BL325',
                    'price': 'E'
                },
                {
                    'rank': 'Y',
                    'amountSeat': '40',
                    'date': vm.datetimePlaneGo,
                    'time': '6:05 PM',
                    'cost': '200000',
                    'totalSeat': '100',
                    'placeFrom': {
                        name: 'Ho Chi Minh',
                        code: 'HCM'
                    } ,
                    'placeTo': {
                        name: 'Noi Bai',
                        code: 'NBN'
                    } ,
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
                    'placeFrom': {
                        name: 'Tan Son Nhat',
                        code: 'TSN'
                    } ,
                    'placeTo': {
                        name: 'Con dao',
                        code: 'CDC'
                    } ,
                    'id': 'BL327',
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
                placeFrom: {
                    name: 'Ho Chi Minh',
                    code: 'HCM'
                } ,
                placeTo: {
                    name: 'Ha Noi',
                    code: 'HAH'
                } ,
                id: 'BL326',
                price: 'E'
            }

            vm.spinner = true;
            vm.list = false;

            vm.init = init;
            vm.addFlight = addFlight;
            vm.editRow = editRow;
            vm.removeRow = removeRow;
        }];
    return controller;
});