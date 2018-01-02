import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import { NavLink } from 'react-router-dom';

class Tabs extends Component {

    constructor(props) {
        super(props);
        this.logoutAndShift = this.logoutAndShift.bind(this);
    }

    componentWillMount() {
        this.cookies = new Cookies();
    }
    renderTab(name, location) {
        return <NavLink className="nav-item nav-link" to={location + ""}>{name}</NavLink>
    }

    render() {
        if (this.cookies.get('isAuthenticated') == 'true') {
            return (
                <ul className="nav nav-tabs">
                    {this.renderTab('Home', '/app/home')}
                    {this.renderTab('Goal Management', '/app/setagoal')}
                    {this.renderLogout()}
                </ul>
            )
        } else {
            return null;
        }
    }

    logoutAndShift() {
        this.cookies.remove('isAuthenticated');
        this.cookies.remove('currentUser');
        this.props.history.push("login");
    }

    renderLogout() {
        return (
            <li className="nav-item">
                <a className="nav-link text-danger" onClick={this.logoutAndShift}>LogOut</a>
            </li>
        );
    }
}

export default Tabs;






