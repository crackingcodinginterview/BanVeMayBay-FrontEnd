define(function(require){
    var angular = require('angular');
    var module = angular.module('app.config', []);

    appConfig.$inject = ['$locationProvider', '$urlRouterProvider', '$httpProvider'];
    function appConfig($locationProvider, $urlRouterProvider, $httpProvider){
        $locationProvider.html5Mode({
            enabled: false,
            requireBase: false
        });
        $urlRouterProvider.otherwise('/search');
        $httpProvider.interceptors.push('authInterceptor');
    }
    module.config(appConfig);

    module.constant('appConstant', {
        // domain: 'https://banvemaybay.apphb.com'
        domain: 'http://test-routes.herokuapp.com'
    });

    return module.name;
});