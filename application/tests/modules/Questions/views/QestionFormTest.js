define([
    'underscore',
    'backbone',
    'modules/Questions/views/QuestionForm',
    'modules/Questions/models/Question',
], function(_, Backbone, QuestionsFormView, QuestionModel) {
    'use strict';
    describe('QuestionForm view', function() {
        beforeEach(function() {
            this.model = new QuestionModel({});
            this.view = new QuestionsFormView({model: this.model});
            this.view.render();
        });

        it('render() should return a view object', function() {
            this.view.render().should.equal(this.view);
        });
    });
});
