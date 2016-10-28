var ratingController = require('./rating-ctrl');

module.exports = (function () {
    return [
        {
            path: '/api/ratings',
            method: 'POST',
            config: ratingController.create
        },
        {
            path: '/api/ratings',
            method: 'GET',
            config: ratingController.list
        },
        {
            path: '/api/ratings/{id}',
            method: 'GET',
            config: ratingController.get
        },
        {
            path: '/api/ratings/{id}',
            method: 'PUT',
            config: ratingController.update
        },
        {
            path: '/api/ratings/{id}',
            method: 'DELETE',
            config: ratingController.delete
        }
    ]
}());