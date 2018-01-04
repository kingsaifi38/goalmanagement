import React, { Component } from 'react';
import Home from '../goal-management/AllPages/Home';
import Login from '../goal-management/AllPages/Login';
import SignUp from '../goal-management/AllPages/SignUp';
import GoalManagement from '../goal-management/AllPages/GoalManagement';

import Cookies from 'universal-cookie';

import AppBar from 'material-ui/AppBar';
import Dialog from 'material-ui/Dialog';
import { Tabs, Tab } from 'material-ui/Tabs';
import FlatButton from 'material-ui/FlatButton';

class MainApp extends Component {

    constructor(props) {
        super(props)
        this.state = {
            logged: false,
        }
        this.cookies = new Cookies();
        this.setLoginState = this.setLoginState.bind(this);
        this.logOut = this.logOut.bind(this);

    }

    setLoginState(state) {
        this.setState({ logged: state });
    }
    logOut() {
        this.setState({ logged: false });
        this.cookies.remove('isAuthenticated');
        this.cookies.remove('currentUser');
    }

    render() {
        return (
            <div>
                <AppBar zDepth={3} iconElementLeft={<i />} title="Goal Management" iconElementRight={this.state.logged ? <FlatButton label="LogOut" onClick={this.logOut} /> : null} />
                <AfterAuth setLoginState={this.setLoginState} logged={this.state.logged} />
            </div>
        );
    }
}

class AfterAuth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogIn: props.logged
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            isLogIn: nextProps.logged
        });
    }

    render() {
        return this.state.isLogIn == true ? (
            <Tabs>
                <Tab label="Home" ><Home /></Tab>
                <Tab label="Management" ><GoalManagement /></Tab>
            </Tabs>)
            : (<Login setLoginState={this.props.setLoginState} />)
    }
}

export default MainApp;
