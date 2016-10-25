define(function (require) {
    'use strict';
    var angular = require('angular');
    var controller = [
        '$scope',
        '$http',
        '$uibModal',
        'appConstant',

        function ($scope,
                  $http,
                  $uibModal,
                  appConstant) {
            var vm = this;

            function searchInfo() {
                var modalInstance = $uibModal.open({
                    templateUrl: 'home/templates/modal/bookDetail.html',
                    controller: 'bookDetailController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        bookData: function($q, $http){
                            var defer = $q.defer();
                            $http.get(appConstant.domain + '/api/reservationtickets/' + vm.idBook).then(function(resp){
                                defer.resolve(resp.data);
                            }).catch(function(error){
                                defer.reject();
                            });
                            return defer.promise;
                        }
                    }
                });
            }

            vm.searchInfo = searchInfo;
        }];
    return controller;
});