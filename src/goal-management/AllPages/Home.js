import React, { Component } from 'react';
import Tabs from '../AllPages/Navbar';
import { LoginAuth } from '../ApiCalling/LoginAuth';
import POCHomePage from './SubPages/POCHomePage'
import Cookies from 'universal-cookie';

class Home extends Component {
    constructor(props) {
        super(props);
        this.cookies = new Cookies();
    }
    componentDidMount() {
        if (!this.cookies.get('isAuthenticated') == 'true') {
            this.cookies.remove('isAuthenticated');
            this.cookies.remove('currentUser');
            this.props.history.push("login");
        }
    }
    render() {
        return (
            <div className="container m-3">
                <POCHomePage />
            </div>
        );
    }
}

export default Home;
