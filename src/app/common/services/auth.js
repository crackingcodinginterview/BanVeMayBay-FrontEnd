define(function (require) {
    'use strict';
    var angular = require('angular');
    var module = angular.module('common.services.auth', []);

    module.factory('auth', [
        '$window',
        function ($window) {

            var services = {};

            // Add JWT methods here
            services.parseJwt = function (token) {
                var base64Url = token.split('.')[1];
                var base64 = base64Url.replace('-', '+').replace('_', '/');
                return JSON.parse($window.atob(base64));
            };

            services.saveToken = function (token) {
                $window.localStorage['jwtToken'] = token;
            };

            services.getToken = function () {
                return $window.localStorage['jwtToken'];
            };

            services.isAuthed = function () {
                var token = services.getToken();
                if (token) {
                    var params = services.parseJwt(token);
                    return Math.round(new Date().getTime() / 1000) <= params.exp;
                } else {
                    return false;
                }
            };

            services.logout = function() {
                $window.localStorage.removeItem('jwtToken');
            };

            return services;
        }]);
    return module.name;
});
