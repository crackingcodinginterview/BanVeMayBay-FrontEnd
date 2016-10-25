define(function(require){
    var angular = require('angular');
    var module = angular.module('app.config', []);

    appConfig.$inject = ['$locationProvider', '$urlRouterProvider'];
    function appConfig($locationProvider, $urlRouterProvider){
        $locationProvider.html5Mode({
            enabled: false,
            requireBase: false
        });
        $urlRouterProvider.otherwise('/search');


    }
    module.config(appConfig);

    module.constant('appConstant', {
        domain: 'http://localhost:53980'
    });

    return module.name;
});