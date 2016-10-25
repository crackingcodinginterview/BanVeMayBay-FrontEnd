define(function (require) {
    "use strict";
    var angular = require('angular');
    var _ = require('lodash');
    var ticketclassJson = require('text!src/app/common/resources/ticketclass.json');
    var controller = [
        '$uibModalInstance',
        'bookData',
        '$http',
        'appConstant',

        function ($uibModalInstance,
                  bookData,
                  $http,
                  appConstant) {
            var vm = this;
            /**
             * Close modal
             */
            function close() {
                $uibModalInstance.dismiss('cancel');
            }

            /**
             * init
             */
            function init() {
                vm.ticketclassData = angular.fromJson(ticketclassJson);
                vm.bookData = angular.copy(bookData);
                vm.bookData.flight.timeTo = vm.bookData.flight.time.substr(11,5);
                vm.bookData.flight.dateTo = new Date(vm.bookData.flight.time);
                vm.bookData.flight.dateTo = vm.bookData.flight.dateTo.toDateString();
            }

            function getTicketclassString(ticketclassId){
                return _.find(vm.ticketclassData, {'id': ticketclassId}).string;
            }

            vm.close = close;
            vm.getTicketclassString = getTicketclassString;

            init();
        }];

    return controller;
});
