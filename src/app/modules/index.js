define(function(require){
    'use strict';

    return {
        base: require('./base/base'),
        helpers: require('./app-helpers/fake-backend'),
        home: require('./home/home')
    };
});