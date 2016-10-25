define(function (require) {
    'use strict';
    var angular = require('angular');
    var _ = require('lodash');
    var ticketclassJson = require('text!src/app/common/resources/ticketclass.json');
    var controller = [
        '$scope',
        '$http',
        '$location',
        '$uibModal',
        '$timeout',
        '$state',
        '$stateParams',
        'appConstant',

        function ($scope,
                  $http,
                  $location,
                  $uibModal,
                  $timeout,
                  $state,
                  $stateParams,
                  appConstant) {
            var vm = this;

            function init() {
                vm.spinner = true;
                vm.list = false;
                vm.param = $stateParams.param;
                vm.ticketclassData = angular.fromJson(ticketclassJson);
            }

            function getTicketclassString(ticketclassId){
                return _.find(vm.ticketclassData, {'id': ticketclassId}).string;
            }

            function getBestFlightTicket(){
                $http.get(appConstant.domain + '/api/flighttickets').then(function(resp){
                    vm.listPlaneData = resp.data || [];
                    vm.spinner = false;
                    vm.list = true;
                });
            }

            function initTime(row) {
                row.flight.timeTo = row.flight.time.substr(11,5);
                row.flight.dateTo = new Date(row.flight.time);
                row.flight.dateTo = row.flight.dateTo.toDateString();
            }

            function pickPlane(row) {
                var modalInstance = $uibModal.open({
                    templateUrl: 'home/templates/modal/pickPlane.html',
                    controller: 'pickPlaneController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        selectedPlane: row,
                        bookDetail: function($http, $q, appConstant){
                            var defer = $q.defer();
                            var text = "";
                            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

                            for( var i=0; i < 6; i++ )
                                text += possible.charAt(Math.floor(Math.random() * possible.length))
                            var postData = {
                                Code: text,
                                Ticketclass: row.ticketclass,
                                Flight: angular.copy(row.flight)
                            };
                            $http.post(appConstant.domain + '/api/reservationtickets', postData).then(function(resp){
                                defer.resolve(resp.data);
                                debugger;
                            });
                            return defer.promise;
                        }
                    }
                });

                modalInstance.result.then(function (resp) {
                    $state.go('base.confirm', { param: resp });
                }, function () {

                });
            }

            function editSearch() {
                $state.go('base.search', {param: vm.param});
            }

            vm.pickPlane = pickPlane;
            vm.editSearch = editSearch;
            vm.getTicketclassString = getTicketclassString;
            vm.initTime = initTime;

            init();
            getBestFlightTicket();
        }];
    return controller;
});