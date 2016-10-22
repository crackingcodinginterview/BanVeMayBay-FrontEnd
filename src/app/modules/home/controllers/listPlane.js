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

            vm.datetimePlane = new Date();
            vm.datetimePlane = vm.datetimePlane.toDateString();
        }];
    return controller;
});