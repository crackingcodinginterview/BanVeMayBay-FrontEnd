define(function (require) {
    'use strict';
    var angular = require('angular');
    var controller = [
        '$scope',
        '$http',
        '$location',
        '$timeout',
        '$uibModal',

        function ($scope,
                  $http,
                  $location,
                  $timeout,
                  $uibModal) {
            var vm = this;

            /**
             * init
             */
            function init() {
                $timeout(function () {
                    vm.spinner = false;
                    vm.list = true;
                }, 2000)
            }

            function showDetail() {
                var row = {};
                row.idBook = "13CTT3";
                row.disabledEdit = true;
                row.user = {'amountSeat': '1'};
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
            }

            vm.spinner = true;
            vm.list = false;

            vm.init = init;
            vm.showDetail = showDetail;
        }];
    return controller;
});