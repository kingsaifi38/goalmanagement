var config = require('./dbconfig');
var connection = config.pool;

exports.getAllGoalByUser = function (req, res) {
    var query = 'SELECT user_goal.*,user_details.name,user_details.user_id FROM user_goal INNER JOIN user_details on user_details.user_id = user_goal.goal_assigned_to where user_goal.goal_assigned_by = ?';
    connection.query(query, [req.query.userId], function (err, results) {
        if (err) {
            res.send({ status: 'failed' });
        } else {
            res.send({ status: 'success', data: results });
        }
    });
}