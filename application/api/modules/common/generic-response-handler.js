'use strict';

/**
* @class genericResponseHandler
* @description Handlers for generic response.
*/
function RestResponseHandler(reply) {
    return {
        success: function (data) {
            reply(data);
        },
        error: function (reason) {
            reply({statusCode: 500, message: reason}).code(500);
        },
        validationError: function (error) {
            reply({statusCode: 400, error: 'Bad Request', message: error.reason, validation: error.validation}).code(400);
        }
    };
}

module.exports = RestResponseHandler;
