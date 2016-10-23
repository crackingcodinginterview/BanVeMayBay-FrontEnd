define(function (require) {
    'use strict';
    var angular = require('angular');
    var controller = [
        '$scope',
        '$http',
        '$uibModal',

        function ($scope,
                  $http,
                  $uibModal) {
            var vm = this;

            function searchInfo() {
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

            vm.searchInfo = searchInfo;
        }];
    return controller;
});