var Joi = require('joi'),
    ratingDAO = require('./rating-dao'),
    ResponseHandler = require('../common/generic-response-handler');

exports.create = {
    handler: function (request, reply) {
        var handler = new ResponseHandler(reply);
        ratingDAO.create(request.payload)
            .then(function (data) {
                var id = data.insertId;
                return ratingDAO.get(request.payload.uuid);
            })
            .then(handler.success, handler.error);
    }
};

exports.list = {
    handler: function (request, reply) {
        var handler = new ResponseHandler(reply);

        var array = [];
        ratingDAO.overall()
            .then(function(result) {
                result.type = "overall";
                array.push(result);
                return ratingDAO.entertaining();
            })
            .then(function(result) {
                result.type = "entertaining";
                array.push(result);
                return ratingDAO.relevance();
            })
            .then(function(result) {
                result.type = "relevance";
                array.push(result);
                return array;
            })
            .then(handler.success, handler.error)
    }
};

exports.get = {
    handler: function (request, reply) {
        var id = request.params.id;
        var handler = new ResponseHandler(reply);
        ratingDAO.get(id).then(handler.success, handler.error);
    }
};

exports.update = {
    handler: function (request, reply) {
        var id = request.params.id;
        var handler = new ResponseHandler(reply);
        ratingDAO.update(id, request.payload)
            .then(function (data) {
                return ratingDAO.get(id);
            })
            .then(handler.success, handler.error);
    }
};


exports.delete = {
    handler: function (request, reply) {
        var id = request.params.id;
        var handler = new ResponseHandler(reply);
        ratingDAO.delete(id).then(handler.success, handler.error);
    }
};
