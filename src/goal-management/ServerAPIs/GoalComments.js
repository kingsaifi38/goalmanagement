var config = require('./dbconfig');
var connection = config.pool;

exports.getCommentsForGoal = function (req, res) {
    var query = 'SELECT * FROM goal_comments where goal_id = ?';
    connection.query(query, [req.query.goalId], function (err, results) {
        if (err) {
            res.send({ status: 'failed' });
        } else {
            res.send({ status: 'success', data: results });
        }
    });
}