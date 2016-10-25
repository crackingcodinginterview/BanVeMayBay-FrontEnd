define(function (require) {
    'use strict';
    var angular = require('angular');
    var controller = [
        '$scope',
        '$http',
        '$location',
        '$timeout',
        '$uibModal',
        '$stateParams',
        '$state',
        'appConstant',

        function ($scope,
                  $http,
                  $location,
                  $timeout,
                  $uibModal,
                  $stateParams,
                  $state,
                  appConstant) {
            var vm = this;
            /**
             * init
             */
            function init() {
                vm.spinner = true;
                vm.list = false;
                $timeout(function () {
                    vm.bookDetail = $stateParams.param;
                    vm.spinner = false;
                }, 2000)
            }

            function showDetail() {
                var modalInstance = $uibModal.open({
                    templateUrl: 'home/templates/modal/bookDetail.html',
                    controller: 'bookDetailController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        bookData: vm.bookDetail
                    }
                });
            }
            vm.showDetail = showDetail;

            init();
        }];
    return controller;
});