define(function(require){
    var angular = require('angular');
    var module = angular.module('app.config', []);

    appConfig.$inject = ['$locationProvider', '$urlRouterProvider', 'NgAdminConfigurationProvider'];
    function appConfig($locationProvider, $urlRouterProvider, NgAdminConfigurationProvider){
        $locationProvider.html5Mode({
            enabled: false,
            requireBase: false
        });
        $urlRouterProvider.otherwise('/search');

        var nga = NgAdminConfigurationProvider;
        var admin = nga.application('My First Admin')
            .baseApiUrl('http://jsonplaceholder.typicode.com/'); // main API endpoint
        var user = nga.entity('users');
        user.listView().fields([
            nga.field('name'),
            nga.field('username'),
            nga.field('email')
        ]);
        admin.addEntity(user);
        // attach the admin application to the DOM and execute it
        nga.configure(admin);
    }
    module.config(appConfig);

    module.constant('appConstant', {
        domain: 'https://banvemaybay.apphb.com'
    });

    return module.name;
});