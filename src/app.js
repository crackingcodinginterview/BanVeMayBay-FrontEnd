define(function (require) {
    var angular = require('angular'),
        angularAnimate = require('angularAnimate'),
        angularSanitize = require('angularSanitize'),
        spin = require('spin'),
        angularSpinner = require('angularSpinner'),
        lodash = require('lodash'),

        appModule = require('./app/modules/index'),
        appConfig = require('./app.config'),

        uiRouter = require('uiRouter'),
        uiSelect = require('uiSelect'),
        // uiBootstrap = require('uiBootstrap'),
        // uiDateTimePiker = require('uiDateTimePiker'),
        uiBootstrapTpls = require('uiBootstrapTpls'),
        moment = require('moment'),
        angularMoment = require('angularMoment'),
        angularLoadingBar = require('angularLoadingBar'),
        ngAdmin = require('ngAdmin');

    var module = angular.module('app', [
        'ngAnimate',
        'ngSanitize',
        'angularSpinner',

        'ui.router',
        'ui.select',
        'ui.bootstrap',
        // 'ui.bootstrap.datetimepicker',
        'angular-loading-bar',
        'angularMoment',
        'ng-admin',

        appConfig,

        'app.base',
        'app.home'
    ]);

    module.controller('AppController', [
        function () {
            window.moment = moment;
        }]);

    return module;
});