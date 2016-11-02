define(function (require) {
    'use strict';
    var angular = require('angular');
    var controller = [
        '$scope',
        '$http',
        'user',
        'auth',

        function ($scope,
                  $http,
                  user,
                  auth) {
            var vm = this;

            function handleRequest(res) {
                var token = res.data ? res.data.token : null;
                if (token) {
                    console.log('JWT:', token);
                }
                vm.message = res.data.message;
            }

            vm.login = function () {
                user.login(vm.username, vm.password)
                    .then(handleRequest, handleRequest);
            };

            // vm.register = function () {
            //     user.register(vm.username, vm.password)
            //        .then(handleRequest, handleRequest);
            // };

            vm.getQuote = function () {
                user.getQuote()
                    .then(handleRequest, handleRequest);
            };
            vm.logout = function () {
                auth.logout && auth.logout();
            };
            vm.isAuthed = function () {
                return auth.isAuthed ? auth.isAuthed() : false
            };

            vm.message = '';
        }];
    return controller;
});