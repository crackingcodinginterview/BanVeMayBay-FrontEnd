define(function (require) {
    var angular = require('angular'),
        angularAnimate = require('angularAnimate'),
        angularSanitize = require('angularSanitize'),
        lodash = require('lodash'),

        appModule = require('./app/modules/index'),
        appConfig = require('./app.config'),

        uiRouter = require('uiRouter'),
        uiSelect = require('uiSelect'),
        uiBootstrap = require('uiBootstrap'),
        uiDateTimePiker = require('uiDateTimePiker'),
        uiBootstrapTpls = require('uiBootstrapTpls');

    var module = angular.module('app', [
        'ngAnimate',
        'ngSanitize',

        'ui.router',
        'ui.select',
        'ui.bootstrap',
        'ui.bootstrap.datetimepicker',

        appConfig,

        'app.base',
        'app.home'
    ]);

    return module;
});