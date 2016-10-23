define(function (require) {
    'use strict';
    var angular = require('angular');
    var controller = [
        '$scope',
        '$http',
        '$state',
        '$stateParams',

        function ($scope,
                  $http,
                  $state,
                  $stateParams) {
            var vm = this;

            /**
             * init
             */
            function init() {
                debugger;
                if ($stateParams.param) {
                    vm.search = $stateParams.param;
                }
                for (var i = 1; i <= 100; i++) {
                    vm.amountSeatData.push(i);
                }
                // vm.placeData = $http.get('http://banvemaybay.apphb.com/api/airports');
            }

            /**
             * openCalendar
             * @param e
             * @param picker
             */
            function openCalendar() {
                vm.openDatetimePicker = !vm.openDatetimePicker;
            }

            /**
             * submit form
             */
            function submitForm() {
                $state.go('base.list', {param: vm.search});
            }

            vm.people = [
                {name: 'Adam', id: 1},
                {name: 'Amalie', id: 2},
                {name: 'Estefanía', id: 3},
                {name: 'Adrian', id: 4},
                {name: 'Wladimir', id: 5},
                {name: 'Samantha', id: 6},
                {name: 'Nicole', id: 7},
                {name: 'Natasha', id: 8}
            ];
            vm.rankData = [
                {
                    'id': 'Y',
                    'name': 'Phổ thông'
                },
                {
                    'id': 'C',
                    'name': 'Thương gia'
                }
            ];
            vm.priceData = [
                {
                    'id': 'E'
                },
                {
                    'id': 'F'
                },
                {
                    'id': 'G'
                }
            ];

            vm.search = {
                'placeFrom': '',
                'placeTo': '',
                'datetimePlane': '',
                'rankId': '',
                'priceId': '',
                'amount': ''
            };

            vm.amountSeatData = [];
            vm.openDatetimePicker = false;
            vm.datepickerOptions = {
                minDate: new Date()
            };

            vm.init = init;
            vm.submitForm = submitForm;
            vm.openCalendar = openCalendar;
        }];
    return controller;
});