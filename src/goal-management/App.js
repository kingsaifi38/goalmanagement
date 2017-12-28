import React, { Component } from 'react';
import Home from '../goal-management/AllPages/Home';
import Login from '../goal-management/AllPages/Login';
import SignUp from '../goal-management/AllPages/SignUp';
import GoalManagement from '../goal-management/AllPages/GoalManagement';
import {Router, Route} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();

class MainApp extends Component {
    render() {
        return (
                <div>
                    <Router history={history}>
                        <div>
                            <Route exact path="/app" component={Login}/>
                            <Route path="/app/login" component={Login}/>
                            <Route path="/app/signup"  component={SignUp}/>
                            <Route path="/app/home" component={Home}/>
                            <Route path="/app/setagoal" component={GoalManagement}/>
                        </div>
                    </Router>
                </div>
                );
    }
}
export default MainApp;
