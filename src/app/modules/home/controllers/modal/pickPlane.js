define(function (require) {
    "use strict";
    var angular = require('angular');
    var _ = require('lodash');
    var controller = [
        '$uibModalInstance',
        'selectedPlane',

        function ($uibModalInstance,
                  selectedPlane) {
            var vm = this;

            /**
             * Close modal
             */
            function close() {
                $uibModalInstance.dismiss('cancel');
            }

            /**
             * submit
             * @param $form
             */
            function ok($form) {
                if ($form.invalid) {
                    return;
                }

                $uibModalInstance.close(vm.selectedPlane);
            }

            /**
             * init
             */
            function init() {
                for (var i = 1; i <= vm.selectedPlane.amountSeat; i++) {
                    vm.amountSeatData.push(i);
                }
            }

            function createUser() {
                vm.selectedPlane.user.totalPrice = Number(vm.selectedPlane.user.amountSeat) * Number(vm.selectedPlane.cost);
            }

            vm.selectedPlane = angular.copy(selectedPlane);
            vm.amountSeatData = [];

            vm.close = close;
            vm.ok = ok;
            vm.init = init;
            vm.createUser = createUser;
        }];

    return controller;
});
