var questionController = require('./questions-ctrl');

module.exports = (function () {
    return [
        {
            path: '/api/questions',
            method: 'POST',
            config: questionController.create
        },
        {
            path: '/api/questions',
            method: 'GET',
            config: questionController.list
        },
        {
            path: '/api/questions/{id}',
            method: 'GET',
            config: questionController.get
        },
        {
            path: '/api/questions/{id}',
            method: 'PUT',
            config: questionController.update
        },
        {
            path: '/api/questions/{id}/vote',
            method: 'PUT',
            config: questionController.vote
        },
        {
            path: '/api/questions/{id}/downvote',
            method: 'PUT',
            config: questionController.downvote
        },
        {
            path: '/api/questions/{id}',
            method: 'DELETE',
            config: questionController.delete
        }
    ]
}());