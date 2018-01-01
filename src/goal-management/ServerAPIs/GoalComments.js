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

exports.setCommentsWithProgressForGoal = function (req, res) {
    var query = "INSERT INTO `goal_comments` (`comment`, `goal_id`, `comment_by`, `comment_date`) VALUES (?, ?, ?, CURRENT_TIMESTAMP);UPDATE `goal_progress` SET `progress`=? WHERE goal_id=?";
    connection.query(query, [req.body.comment, req.body.goalId, req.body.userlId, req.body.progress, req.body.goalId], function (err, results) {
        if (err) {
            res.send({ status: 'failed' });
        } else {
            res.send({ status: 'success', data: results });
        }
    });
}
exports.setCommentsForGoal = function (req, res) {
    var query = "INSERT INTO `goal_comments` (`comment`, `goal_id`, `comment_by`, `comment_date`) VALUES (?, ?, ?, CURRENT_TIMESTAMP)";
    connection.query(query, [req.body.comment, req.body.goalId, req.body.userlId], function (err, results) {
        if (err) {
            res.send({ status: 'failed' });
        } else {
            res.send({ status: 'success', data: results });
        }
    });
}