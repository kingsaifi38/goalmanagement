
bodyParser = require('body-parser');
const path = require('path')
const express = require('express')
const webpack = require('webpack')
const config = require('./build/webpack.config.development')
const app = express()
const compiler = webpack(config)
const port = 9000

loginAuth = require('./src/goal-management/ServerAPIs/Authentication');
userDetailes = require('./src/goal-management/ServerAPIs/userDetails');
goalInfo = require('./src/goal-management/ServerAPIs/goal');
goalComments = require('./src/goal-management/ServerAPIs/GoalComments');

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    stats: {
        colors: true
    }
}))

var apiRoute = express.Router();
app.use(bodyParser.json());
app.use(require('webpack-hot-middleware')(compiler))
app.use('/api', apiRoute);
/****************************************/
// APIs

apiRoute.post('/loginauth', loginAuth.userAuthentication);
apiRoute.post('/signup', loginAuth.userSignUp);
apiRoute.post('/setusergoal', userDetailes.setUserGoal);
apiRoute.get('/getallusersforgoal', userDetailes.getallusersforgoal);
apiRoute.get('/getAllGoalByUser', goalInfo.getAllGoalByUser);
apiRoute.get('/getAllGoalAssigned', goalInfo.getAllGoalAssigned);
apiRoute.get('/getUserRole', userDetailes.getUserRole);
apiRoute.get('/getCommentsForGoal', goalComments.getCommentsForGoal);
apiRoute.post('/setCommentsWithProgressForGoal', goalComments.setCommentsWithProgressForGoal);
apiRoute.post('/setCommentsForGoal', goalComments.setCommentsForGoal);


/****************************************/


app.get('/app/*', function (req, res) {
    res.sendFile(path.join(__dirname, './tests/index.html'))
});

app.get('/', function (req, res) {
    res.redirect('/app/');
});
app.get('/app', function (req, res) {
    res.redirect('/app/');
});
app.listen(port, '0.0.0.0', function (err) {
    if (err) {
        console.log(err)
        return;
    }
})
