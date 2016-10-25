define(function (require) {
    "use strict";
    var angular = require('angular');
    var _ = require('lodash');
    var controller = [
        '$uibModalInstance',
        'infoFlight',

        function ($uibModalInstance,
                  infoFlight) {
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

                $uibModalInstance.close(vm.infoFlight);
            }

            /**
             * init
             */
            function init() {

            }

            vm.openCalendar = function (picker) {
                picker.open = !picker.open;
            };

            vm.placeFrom = {
                code: '',
                name: ''
            }
            vm.placeTo = {
                code: '',
                name: ''
            }
            vm.datetime = {
                date: null,
                open: false,
                datepickerOptions: {
                    minDate: new Date()
                }
            }
            vm.infoFlight = angular.copy(infoFlight);

            vm.close = close;
            vm.ok = ok;
            vm.init = init;
        }];

    return controller;
});
