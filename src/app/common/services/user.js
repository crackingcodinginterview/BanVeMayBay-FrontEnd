define(function (require) {
    'use strict';
    var angular = require('angular');
    var module = angular.module('common.services.user', [
        require('./auth')
    ]);

    module.factory('user', [
        '$http',
        'appConstant',
        'auth',
        function ($http,
                  appConstant,
                  auth) {

            var services = {};

            services.getQuote = function () {
                return $http.get(appConstant.domain + '/auth/quote')
            };

            // add authentication methods here
            services.register = function (username, password) {
                return $http.post(appConstant.domain + '/auth/register', {
                    username: username,
                    password: password
                })
            };

            services.login = function (username, password) {
                return $http.post(appConstant.domain + '/auth/login', {
                    username: username,
                    password: password
                })
            };

            return services;
        }]);
    return module.name;
});
