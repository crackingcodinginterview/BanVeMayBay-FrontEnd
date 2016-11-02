define(function (require) {
    'use strict';
    var angular = require('angular');
    var module = angular.module('common.services.authInterceptor', [
        require('./auth')
    ]);

    module.factory('authInterceptor', [
        'appConstant',
        'auth',
        function (appConstant,
                  auth) {

            var services = {};

            // automatically attach Authorization header
            services.request = function (config) {
                var token = auth.getToken();
                if(config.url.indexOf(appConstant.domain) === 0 && token) {
                    config.headers.Authorization = 'Bearer ' + token;
                }

                return config;
            };

            // If a token was sent back, save it
            services.response = function (res) {
                debugger;
                if(res.config.url.indexOf(appConstant.domain) === 0 && res.data.token) {
                    auth.saveToken(res.data.token);
                }

                return res;
            };

            return services;
        }]);
    return module.name;
});
