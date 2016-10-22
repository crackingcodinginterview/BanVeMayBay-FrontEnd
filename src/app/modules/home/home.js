define(function(require){
    'use strict';

    var angular = require('angular'),
        homeController = require('./controllers/list'),

        homeContentTpl = require('text!./templates/home.html');

    var module = angular.module('app.home', []);

    module.run([
        '$templateCache',
    function ($templateCache) {
        $templateCache.put('home/templates/home.html', homeContentTpl);
    }]);

    module.controller('homeController', homeController);

    config.$inject = ['$stateProvider'];
    function config($stateProvider){
        $stateProvider.state('base.home', {
            url: '/',
            views: {
                'main': {
                    templateUrl: 'home/templates/home.html',
                    controller: homeController,
                    controllerAs: 'vm'
                }
            }
        });
    }
    module.config(config);

    return module.name;
});