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
                //Get list data flight
                $http.get('http://banvemaybay.apphb.com/api/airports').then(function (response) {
                    vm.listFlight = response.data;
                });

                if ($stateParams.param) {
                    vm.search = $stateParams.param;
                }
                for (var i = 1; i <= 100; i++) {
                    vm.amountSeatData.push(i);
                }
            }

            /**
             * submit form
             */
            function submitForm() {
                $state.go('base.list', {param: vm.search});
            };

            function removePlane(planeCode) {
                _.forEach(vm.listPlaneData, function (o) {
                    if (o.code === planeCode) {
                        vm.listPlaneData = _.remove(o, {'code': planeCode});
                    }
                });
            };

            vm.openCalendar = function (picker) {
                picker.open = !picker.open;
            };

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
                placeFrom: '',
                placeTo: '',
                datetimePlaneGo: {
                    date: '',
                    datepickerOptions: {
                        minDate: new Date(),
                        maxDate: null
                    },
                    timepickerOptions: {
                        max: null
                    },
                    open: false
                },
                datetimePlaneBack: {
                    date: '',
                    datepickerOptions: {
                        minDate: null
                    },
                    timepickerOptions: {
                        min: null
                    },
                    open: false
                },
                rankId: '',
                priceId: '',
                amount: '',
                isReturn: 'false'
            };

            vm.amountSeatData = [];
            vm.openDatetimePicker1 = false;
            vm.openDatetimePicker2 = false;
            vm.datepickerOptions = {};

            vm.init = init;
            vm.submitForm = submitForm;
            vm.removePlane = removePlane;

            // watch min and max dates to calculate difference
            var unwatchMinMaxValues = $scope.$watch(function () {
                return [vm.search.datetimePlaneGo, vm.search.datetimePlaneBack];
            }, function () {
                // min max dates
                vm.search.datetimePlaneGo.datepickerOptions.maxDate = vm.search.datetimePlaneBack.date;
                vm.search.datetimePlaneBack.datepickerOptions.minDate = vm.search.datetimePlaneGo.date;

                if (vm.search.datetimePlaneGo.date && vm.search.datetimePlaneBack.date) {
                    var diff = vm.search.datetimePlaneGo.date.getTime() - vm.search.datetimePlaneBack.date.getTime();
                    vm.dayRange = Math.round(Math.abs(diff / (1000 * 60 * 60 * 24)))
                } else {
                    vm.dayRange = 'n/a';
                }

                // min max times
                vm.search.datetimePlaneGo.timepickerOptions.max = vm.search.datetimePlaneBack.date;
                vm.search.datetimePlaneBack.timepickerOptions.min = vm.search.datetimePlaneGo.date;
            }, true);


            // destroy watcher
            $scope.$on('$destroy', function () {
                unwatchMinMaxValues();
            });
        }];
    return controller;
});