var config = require('./dbconfig');
var connection = config.pool;

exports.getCommentsForGoal = function (req, res) {
    var query = 'SELECT goal_comments.*,user_details.name FROM goal_comments INNER JOIN user_details on user_details.user_id = goal_comments.comment_by where goal_id = ?';
    connection.query(query, [req.query.goalId], function (err, results) {
        if (err) {
            res.send({ status: 'failed' });
        } else {
            res.send({ status: 'success', data: results });
        }
    });
}