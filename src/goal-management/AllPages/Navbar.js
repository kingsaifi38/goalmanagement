import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import { NavLink } from 'react-router-dom';

class Tabs extends Component {

    constructor(props) {
        super(props);
        this.cookies = new Cookies();
    }

    renderTab(name, location) {
        return <NavLink className="nav-item nav-link" to={location + ""}>{name}</NavLink>
    }

    render() {
        if (!this.cookies.get('isAuthenticated')) {
            return null;
        } else {
            return (
                <ul className="nav nav-tabs">
                    {this.renderTab('Home', '/app/home')}
                    {this.renderTab('Goal Management', '/app/setagoal')}
                    {this.renderLogout()}
                </ul>
            );
        }
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






