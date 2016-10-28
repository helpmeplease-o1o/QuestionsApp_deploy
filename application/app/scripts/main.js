require.config({
    paths: {
        text: '../bower_components/requirejs-text/text',
        modernizr: '../bower_components/modernizr/modernizr',
        jquery: '../bower_components/jquery/jquery',
        underscore: '../bower_components/underscore/underscore',
        backbone: '../bower_components/backbone/backbone',
        handlebars: '../bower_components/handlebars/handlebars',
        handlebarsHelpers: 'lib/handlebarsHelpers',
        foundation: '../bower_components/foundation/js/foundation',
        fastclick: '../bower_components/foundation/js/vendor/fastclick',
        requirejs: '../bower_components/requirejs/require',
        'socket.io': '../bower_components/sio-client/socket.io',
        'lil-uuid':'../bower_components/lil-uuid/uuid'
    },
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'jquery',
                'underscore'
            ],
            exports: 'Backbone'
        },
        foundation: {
            deps: ['jquery', 'fastclick']
        }
    }
});

require(['app', 'foundation'], function (App) {
    'use strict';

    function initLocalSotrage() {
        if(!localStorage.questions) {
            localStorage.setItem('questions', JSON.stringify({}));    
        }
    }   

    App.initialize();
    $(document).foundation();
    initLocalSotrage();
    
    
});

