'use strict';
require.config({
    preserveLicenseComments: false,
    generateSourceMaps: false,
    waitSeconds: 30,
    paths: {
        jquery: 'bower_components/jquery/dist/jquery',

        angular: 'bower_components/angular/angular',
        angularAnimate: './bower_components/angular-animate/angular-animate',
        angularSanitize: './bower_components/angular-sanitize/angular-sanitize',
        lodash: './bower_components/lodash/dist/lodash',

        uiRouter: 'bower_components/angular-ui-router/release/angular-ui-router',
        uiSelect: 'bower_components/angular-ui-select/dist/select',
        uiBootstrap: './bower_components/angular-bootstrap/ui-bootstrap',
        uiBootstrapTpls: './bower_components/angular-bootstrap/ui-bootstrap-tpls',
        uiDateTimePiker: './bower_components/bootstrap-ui-datetime-picker/dist/datetime-picker'
    },
    shim: {
        'angular': {
            deps: ['jquery'],
            exports: 'angular'
        },
        'angularAnimate': {
            deps: ['angular']
        },
        'angularSanitize': {
            deps: ['angular']
        },
        'uiRouter': {
            deps: ['angular']
        },
        'uiSelect': {
            deps: ['angular']
        },
        'select2': {
            deps: ['jquery']
        },
        'uiBootstrap': {
            deps: ['angular']
        },
        'uiBootstrapTpls': {
            deps: ['angular']
        },
        'uiDateTimePiker': {
            deps: ['angular']
        }
    },
    exclude: [
        'jquery'
    ],
    include: [
        'angular',
        'ngAnimate',
        'ngSanitize',

        'uiRouter',
        'uiSelect',
        'ui.bootstrap',
        'ui.bootstrap.datetimepicker'
    ]
});
