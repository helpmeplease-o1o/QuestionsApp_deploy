var GenericDao = require('../common/generic-dao');
var dao = new GenericDao();


exports.create = function (doc) {
    var sqlQuery = 'INSERT INTO uuid_votes (question_id, uuid) VALUES (?, ?)';
    var values = [doc.id, doc.uuid];
    sqlQuery = dao.format(sqlQuery, values);
    return dao.promiseQuery(sqlQuery);
};

exports.list = function () {
    var sqlQuery = 'SELECT  * FROM uuid_votes';
    return dao.promiseQuery(sqlQuery);
};

exports.get = function (uuid, question_id) {
    var sqlQuery = 'SELECT  * FROM uuid_votes WHERE uuid = ? and question_id = ?';
    var values = [uuid, question_id];
    sqlQuery = dao.format(sqlQuery, values);
    return dao.promiseQuery(sqlQuery);
};