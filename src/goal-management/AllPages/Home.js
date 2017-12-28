import React, { Component } from 'react';
import Tabs from '../AllPages/Navbar';
import { LoginAuth } from '../ApiCalling/LoginAuth';

class Home extends Component {
    constructor(props) {
        super(props);
        this.checkForLogin = false;

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
