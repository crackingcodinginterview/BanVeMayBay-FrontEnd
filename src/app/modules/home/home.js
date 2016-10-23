define(function (require) {
    'use strict';

    var angular = require('angular'),
        searchPlaneController = require('./controllers/searchPlane'),
        listPlaneController = require('./controllers/listPlane'),
        bookingController = require('./controllers/booking'),
        payController = require('./controllers/pay'),
        confirmController = require('./controllers/confirm'),

        pickPlaneController = require('./controllers/modal/pickPlane'),

        // planeDetailDirective = require('./controllers/planeDetail'),

        searchPlaneTemplate = require('text!./templates/searchPlane.html'),
        listPlaneTemplate = require('text!./templates/listPlane.html'),
        bookingTemplate = require('text!./templates/booking.html'),
        payTemplate = require('text!./templates/pay.html'),
        confirmTemplate = require('text!./templates/confirm.html'),

        pickPlaneTemplate = require('text!./templates/modal/pickPlane.html');

    // planeDetailContentTpl = require('text!./templates/planeDetail.html');

    var module = angular.module('app.home', []);

    module.run([
        '$templateCache',
        function ($templateCache) {
            $templateCache.put('home/templates/searchPlane.html', searchPlaneTemplate);
            $templateCache.put('home/templates/listPlane.html', listPlaneTemplate);
            $templateCache.put('home/templates/booking.html', bookingTemplate);
            $templateCache.put('home/templates/pay.html', payTemplate);
            $templateCache.put('home/templates/confirm.html', confirmTemplate);
            $templateCache.put('home/templates/modal/pickPlane.html', pickPlaneTemplate);
            // $templateCache.put('home/templates/planeDetail.html', planeDetailContentTpl);
        }]);

    module.controller('searchPlaneController', searchPlaneController);
    module.controller('listPlaneController', listPlaneController);
    module.controller('bookingController', bookingController);
    module.controller('payController', payController);
    module.controller('confirmController', confirmController);
    module.controller('pickPlaneController', pickPlaneController);

    // module.directive('planeDetailDirective', planeDetailDirective);

    config.$inject = ['$stateProvider'];
    function config($stateProvider) {
        $stateProvider
            .state('base.search', {
                url: '/search',
                views: {
                    'main': {
                        templateUrl: 'home/templates/searchPlane.html',
                        controller: searchPlaneController,
                        controllerAs: 'vm'
                    }
                }
            })
            .state('base.list', {
                url: '/list',
                views: {
                    'main': {
                        templateUrl: 'home/templates/listPlane.html',
                        controller: listPlaneController,
                        controllerAs: 'vm'
                    }
                }
            })
            .state('base.booking', {
                url: '/booking',
                views: {
                    'main': {
                        templateUrl: 'home/templates/booking.html',
                        controller: payController,
                        controllerAs: 'vm'
                    }
                }
            })
            .state('base.pay', {
                url: '/pay',
                views: {
                    'main': {
                        templateUrl: 'home/templates/pay.html',
                        controller: searchPlaneController,
                        controllerAs: 'vm'
                    }
                }
            })
            .state('base.confirm', {
                url: '/confirm',
                views: {
                    'main': {
                        templateUrl: 'home/templates/confirm.html',
                        controller: confirmController,
                        controllerAs: 'vm'
                    }
                }
            });
    }

    module.config(config);

    return module.name;
});