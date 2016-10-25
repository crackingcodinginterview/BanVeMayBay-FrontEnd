define(function (require) {
    "use strict";
    var angular = require('angular');
    var _ = require('lodash');
    var ticketclassJson = require('text!src/app/common/resources/ticketclass.json');
    var controller = [
        '$uibModalInstance',
        'selectedPlane',
        'bookDetail',
        '$http',
        'appConstant',

        function ($uibModalInstance,
                  selectedPlane,
                  bookDetail,
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
             * submit
             * @param $form
             */
            function ok($form) {
                if ($form.invalid) {
                    return;
                }
                vm.bookDetail.status = 1;
                $http.put(appConstant.domain + '/api/reservationtickets/' + vm.bookDetail.id, vm.bookDetail).then(function(resp){
                    $uibModalInstance.close(resp.data);
                }).catch(function(error){

                })
            }

            /**
             * init
             */
            function init() {
                vm.ticketclassData = angular.fromJson(ticketclassJson);
                vm.selectedPlane = angular.copy(selectedPlane);
                vm.bookDetail = angular.copy(bookDetail);
                vm.amountSeatData = [];
                for (var i = 1; i <= vm.selectedPlane.numSeatAvailable; i++) {
                    vm.amountSeatData.push(i);
                }
            }

            function createUser() {
                vm.totalPrice = Number(vm.bookDetail.numSeatBook) * Number(vm.selectedPlane.price);
            }

            function getTotalTicket(ticketclassId){
                if(ticketclassId === vm.ticketclassData.PHOTHONG.id)
                    return vm.selectedPlane.flight.numSeat1;
                return vm.selectedPlane.flight.numSeat2;
            }

            function getTicketclassString(ticketclassId){
                return _.find(vm.ticketclassData, {'id': ticketclassId}).string;
            }

            vm.close = close;
            vm.ok = ok;
            vm.createUser = createUser;
            vm.getTicketclassString = getTicketclassString;
            vm.getTotalTicket = getTotalTicket;

            init();
        }];

    return controller;
});
