import React, { Component } from 'react';
import Home from '../goal-management/AllPages/Home';
import Login from '../goal-management/AllPages/Login';
import SignUp from '../goal-management/AllPages/SignUp';
import GoalManagement from '../goal-management/AllPages/GoalManagement';
import Tabs from './AllPages/Navbar'
import { Router, Route, Switch, Redirect } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();

class MainApp extends Component {
    render() {
        return (
            <div>
                <Router history={history}>
                    <div>
                        <Tabs history={history} />
                        <Switch>
                            <Route exact path="/app" component={Login} />
                            <Route path="/app/login" component={Login} />
                            <Route path="/app/signup" component={SignUp} />
                            
                            {/* https://reacttraining.com/react-router/web/api/Route/path-string */}
                            <Redirect exact strict from='/app/home' to='/app/home/assigneduser' />                          
                            <Route path="/app/home/:newMetho" component={Home} />
                            <Route path="/app/setagoal" component={GoalManagement} />
                            {/* Other Routes */}
                            <Route path="/app/*" component={Login} />
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}
export default MainApp;
