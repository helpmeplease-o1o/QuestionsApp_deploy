var GenericDao = require('../common/generic-dao');
var dao = new GenericDao();

exports.create = function(doc) {
    var sqlQuery = 'INSERT INTO uuid_rating (uuid, overall, relevance, entertaining) VALUES (?, ?, ?, ?)';
    var values = [doc.uuid, doc.overall, doc.relevance, doc.entertaining];
    sqlQuery = dao.format(sqlQuery, values);
    return dao.promiseQuery(sqlQuery);
};

exports.get = function(id) {
    var sqlQuery = 'SELECT * FROM uuid_rating WHERE uuid = ?';
    var values = [id];
    sqlQuery = dao.format(sqlQuery, values);
    return dao.get(sqlQuery);
};

exports.update = function(id, doc) {
    var sqlQuery = 'UPDATE uuid_rating SET overall = ?, relevance = ?, entertaining = ?  WHERE uuid = ?';
    var values = [doc.overall, doc.relevance, doc.entertaining, id];
    sqlQuery = dao.format(sqlQuery, values);
    return dao.promiseQuery(sqlQuery);
};

exports.delete = function(id) {
    var sqlQuery = 'DELETE FROM uuid_rating WHERE uuid = ?';
    var values = [id];
    sqlQuery = dao.format(sqlQuery, values);
    return dao.promiseQuery(sqlQuery);
};


exports.overall = function() {
    var sqlQuery = 'SELECT COALESCE(sum(overall), 0) AS sum, count(*) votes FROM uuid_rating WHERE overall > 0 ';
    return dao.get(sqlQuery);
};

exports.relevance = function() {
    var sqlQuery = 'SELECT COALESCE(sum(relevance), 0) AS sum, count(*) votes FROM uuid_rating WHERE relevance > 0 ';
    return dao.get(sqlQuery);
};

exports.entertaining = function() {
    var sqlQuery = 'SELECT COALESCE(sum(entertaining), 0) AS sum, count(*) votes FROM uuid_rating WHERE entertaining > 0 ';
    return dao.get(sqlQuery);
};

exports.list = function () {
    var sqlQuery = 'SELECT  * FROM uuid_rating';
    return dao.promiseQuery(sqlQuery);
};

