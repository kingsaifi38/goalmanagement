import React, { Component } from 'react';
import Tabs from '../AllPages/Navbar';
import { LoginAuth } from '../ApiCalling/LoginAuth';
import Cookies from 'universal-cookie';

class Home extends Component {
    constructor(props) {
        super(props);
        this.cookies = new Cookies();
        this.isAuthenticated = this.cookies.get('isAuthenticated') || false;
    }
    componentWillMount() {
        if (!this.isAuthenticated) {
            this.props.history.push('login');
        }
    }
    render() {
        return (
            <div>
                <Tabs activeEle="Home" />
                <div className="container">
                    <h1>Home</h1>
                    <hr />
                </div>
            </div>
        );
    }
}

export default Home;
