define([
    'underscore',
    'backbone',
    'modules/Questions/views/Questions'
], function(
    _,
    Backbone,
    QuestionsView
){
    'use strict';

    var initialize = function() {

        if(!localStorage.userName) {
          var userName = prompt('Please enter your name.', '');
          while ((userName === '' || userName === null)) {
            userName = prompt('Please enter your name.', '');
            continue;
          }
          localStorage.setItem('userName', userName);
        }

        var questionsView = new QuestionsView();

        new (Backbone.Router.extend({
            routes: {
                '(*actions)(/)': 'defaultAction'
            },

            defaultAction: function() {
                questionsView.render();
            }
        }))();

        Backbone.history.start();
    };

    return {
        initialize: initialize
    };
});
