'use strict';

require.config({
    preserveLicenseComments: false,
    generateSourceMaps: false,
    paths: {
        text: 'bower_components/requirejs-plugins/lib/text',
        async: 'bower_components/requirejs-plugins/src/async',

        'angular': 'empty:',
        'angularAnimate': 'empty:',
        'angularSanitize': 'empty:',
        'lodash': 'empty:',

        'uiRouter': 'empty:',
        'uiSelect': 'empty:',
        'ui.bootstrap': 'empty:',
        'ui.bootstrap.datetimepicker': 'empty:',
        'moment': 'empty:',
        'angularMoment': 'empty:',
        'angularLoadingBar': 'empty:'
    },

    shim: {},
    exclude: [
        'text',
        'async',
        './vendor.jquery',
        './vendor.angular'
    ],
    include: []
});

require([
    'vendor.jquery'
], function() {
    require([
        'vendor.angular'
    ], function() {
        require([
            'angular',
            'src/app'
        ], function(angular, app) {
            var $html = angular.element(document.getElementsByTagName('html')[0]);
            angular.element().ready(function() {
                angular.bootstrap($html, [app.name]);
            });
        });
    });
});

