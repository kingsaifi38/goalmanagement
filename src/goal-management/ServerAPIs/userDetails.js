var config = require('./dbconfig');

var connection = config.pool;

exports.getallusersforgoal = function (req, res) {
    var query = 'SELECT user_id,name,username FROM user_details where user_id in (SELECT user from user_poc_mapping WHERE poc=?)';
    connection.query(query, [req.query.userId], function (err, results) {
        if (err) {
            res.send({ status: 'failed' });
        } else {
            res.send({ status: 'success', data: results });
        }
    });
}
exports.getUserRole = function (req, res) {
    var query = 'SELECT * FROM user_role_mapping where user_id = ?';
    connection.query(query, [req.query.userId], function (err, results) {
        if (err) {
            res.send({ status: 'failed' });
        } else {
            res.send({ status: 'success', data: results });
        }
    });
}

exports.setUserGoal = function (req, res) {
    var query = "INSERT INTO user_goal (goal_assigned_to,goal_title,goal_description,goal_start_date,goal_end_date,goal_assigned_by) VALUES (?, ?, ?, ?, ?, ?);INSERT INTO goal_progress (goal_id, progress) select LAST_INSERT_ID(),'0'";
    connection.query(query, [req.body.goal_assigned_to, req.body.goal_title, req.body.goal_description, req.body.goal_start_date, req.body.goal_end_date, req.body.goal_assigned_by], function (err, results) {
        if (err) {
            res.send({ status: 'failed' });
        } else {

            res.send({ status: 'success' });
        }
    });
}