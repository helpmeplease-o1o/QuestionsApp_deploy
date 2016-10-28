var Joi = require('joi'),
    questionsDAO = require('./questions-dao'),
    ResponseHandler = require('../common/generic-response-handler');

exports.create = {
    handler: function (request, reply) {
        var handler = new ResponseHandler(reply);
        questionsDAO.create(request.payload)
            .then(function (data) {
                var id = data.insertId;
                return questionsDAO.get(id);
            })
            .then(handler.success, handler.error);
    },
    validate: {
        payload: {
            question: Joi.string().required().min(3)
        }
    }
};

exports.list = {
    handler: function (request, reply) {
        var uuid = request.query.id;
        var handler = new ResponseHandler(reply);
        if (uuid === undefined) {
            questionsDAO.list().then(handler.success, handler.error);
        } else {
            questionsDAO.filterByUUID(uuid).then(handler.success, handler.error);
        }
    },
    validate: {
        query: {
            id: Joi.string().optional()
        }
    }
};

exports.get = {
    handler: function (request, reply) {
        var id = request.params.id;
        var handler = new ResponseHandler(reply);
        questionsDAO.get(id).then(handler.success, handler.error);
    },
    validate: {
        params: {
            id: Joi.number().required().min(0)
        }
    }
};

exports.update = {
    handler: function (request, reply) {
        var id = request.params.id;
        var handler = new ResponseHandler(reply);
        questionsDAO.update(id, request.payload)
            .then(function (data) {
                return questionsDAO.get(id);
            })
            .then(handler.success, handler.error);
    },
    validate: {
        payload: {
            id: Joi.number(),
            question: Joi.string().required().min(3),
            votes: Joi.number().required().min(0)
        },
        params: {
            id: Joi.number().required().min(0)
        }
    }
};

exports.vote = {
    handler: function (request, reply) {
        var id = request.params.id;
        var handler = new ResponseHandler(reply);
        questionsDAO.get(id)
            .then(function (doc) {
                var votes = doc.votes + 1;
                doc.votes = votes;
                return questionsDAO.update(id, doc)
            })
            .then(handler.success, handler.error);
    },
    validate: {
        params: {
            id: Joi.number().required().min(0)
        }
    }
};

exports.downvote = {
    handler: function (request, reply) {
        var id = request.params.id;
        var handler = new ResponseHandler(reply);
        questionsDAO.get(id)
            .then(function (doc) {
                var votes = doc.votes - 1;
                doc.votes = votes;
                return questionsDAO.update(id, doc)
            })
            .then(handler.success, handler.error);
    },
    validate: {
        params: {
            id: Joi.number().required().min(0)
        }
    }
};

exports.delete = {
    handler: function (request, reply) {
        var id = request.params.id;
        var handler = new ResponseHandler(reply);
        questionsDAO.delete(id).then(handler.success, handler.error);
    },
    validate: {
        params: {
            id: Joi.number().required().min(0)
        }
    }
};
