define(function (require) {
    'use strict';
    var angular = require('angular');

    var module = angular.module('common.services', [
        require('./auth'),
        require('./authInterceptor'),
        require('./user')
    ]);
    return module.name;
});
