var config = require('./dbconfig');

var connection = config.pool;

exports.userAuthentication = function (req, res) {
    var query = 'select count(user_id) as isLogin,user_id from user_details where username=? and password=?';
    connection.query(query, [req.body.userid, req.body.password], function (err, results) {
        if (err) {
            res.send({ status: 'failed' });
        } else {
            res.send({ status: 'success', data: results });
        }
    });
}
exports.userSignUp = function (req, res) {
    var query = 'INSERT INTO `user_details` (`name`, `username`, `password`) VALUES (?, ?, ?)';
    connection.query(query, [req.body.name, req.body.userid, req.body.password], function (err) {
        if (err) {
            res.send({ status: 'failed' });
        } else {
            res.send({ status: 'success' });
        }
    });
}
