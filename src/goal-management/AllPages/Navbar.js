import React, { Component } from 'react';
import Cookies from 'universal-cookie';

class Tabs extends Component {

    constructor(props) {
        super(props);
        this.cookies = new Cookies();
        this.activeElement = props.activeEle;
    }

    renderTab(name, location) {
        return (
            <li className="nav-item">
                <a className={"nav-link " + (this.activeElement == name ? "active" : "")} href={location}>{name}</a>
            </li>
        );
    }

    render() {
        return (
            <div>
                <ul className="nav nav-tabs">
                    {this.renderTab('Home', '/app/home')}
                    {this.renderTab('Goal Management', '/app/setagoal')}
                    {this.renderLogout()}
                </ul>
            </div>
        );
    }

    logoutAndShift = function (props) {
        this.cookies.remove('isAuthenticated');
        window.location.href = "/app/login";
    }

    renderLogout(props) {
        return (
            <li className="nav-item">
                <a className="nav-link text-danger" onClick={() => this.logoutAndShift(props)}>LogOut</a>
            </li>
        );
    }
}

export default Tabs;






