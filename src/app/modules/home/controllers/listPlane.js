define(function (require) {
    'use strict';
    var angular = require('angular');
    var controller = [
        '$scope',
        '$http',
        '$location',

        function ($scope,
                  $http,
                  $location) {
            var vm = this;

            /**
             * init
             */
            function init() {
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
                $location.path('/booking');
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
            vm.amountSeatData = [];
            vm.openDatetimePicker = false;

            vm.init = init;
            vm.submitForm = submitForm;
            vm.openCalendar = openCalendar;
        }];
    return controller;
});