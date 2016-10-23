define(function (require) {
    "use strict";
    var angular = require('angular');
    var _ = require('lodash');
    var controller = [
        '$uibModalInstance',
        'pickedPlane',

        function ($uibModalInstance,
                  pickedPlane) {
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

                vm.customner = {
                    'planeDetail': vm.pickedPlane,
                    'userDetail': vm.users
                }

                $uibModalInstance.close(vm.customner);
            }

            /**
             * init
             */
            function init() {
                for (var i = 1; i <= vm.pickedPlane.amountSeat; i++) {
                    vm.amountSeatData.push(i);
                }
            }

            function createUser() {
                vm.user.totalPrice = Number(vm.user.amountSeat) * Number(vm.pickedPlane.cost);
                vm.users = [];
                for (var i = 0; i < vm.user.amountSeat; i++) {
                    vm.users.push(
                        {
                            'firstName': '',
                            'lastName': '',
                            'nickName': ''
                        }
                    );
                }
            }

            vm.pickedPlane = angular.copy(pickedPlane);
            vm.amountSeatData = [];

            vm.close = close;
            vm.ok = ok;
            vm.init = init;
            vm.createUser = createUser;
        }];

    return controller;
});
