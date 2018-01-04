import React, { Component } from 'react';
import Home from '../goal-management/AllPages/Home';
import Login from '../goal-management/AllPages/Login';
import SignUp from '../goal-management/AllPages/SignUp';
import GoalManagement from '../goal-management/AllPages/GoalManagement';
// import Tabs from './AllPages/Navbar'
import { Router, Route, Switch, Redirect } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import AppBar from 'material-ui/AppBar';



import { Tabs, Tab } from 'material-ui/Tabs';
import FlatButton from 'material-ui/FlatButton';



import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

const history = createBrowserHistory();

class SideButton extends Component {
    render() {
        return (
            <FlatButton labelStyle={{ color: 'white' }}
                label="Login" />
        );
    }
}

class MainApp extends Component {

    constructor(props) {
        super(props)
        this.state = {
            logged: false,
        }
    }
    componentWillUpdate(nextProps, nextState) {
        console.log("componentWillUpdate");
    }
    render() {
        return (
            <div>
                <Router history={history}>
                    <div>
                        <AppBar iconElementLeft={<i />}
                            title="Goal Management" iconElementRight={<SideButton />}
                        >
                        </AppBar>
                        <Tabs>
                            <Tab label="Home" >
                                <Home />
                            </Tab>
                            <Tab label="Management" >
                                <GoalManagement />
                            </Tab>
                        </Tabs>
                        {/* <Tabs history={history} /> */}
                        {/* <Switch>
                            <Route exact path="/app" component={Login} />
                            <Route path="/app/login" component={Login} />
                            <Route path="/app/signup" component={SignUp} />
                            <Route path="/app/home" component={Home} />
                            <Route path="/app/setagoal" component={GoalManagement} />
                            
                            <Route path="/app/*" component={Login} />
                        </Switch> */}
                    </div>
                </Router>
            </div>
        );
    }
}
export default MainApp;
