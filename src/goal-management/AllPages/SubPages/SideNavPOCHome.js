import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class SideNavPOCHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="list-group col-md-2">
                <NavLink className="list-group-item list-group-item-action" activeClassName="bg-success text-white" to="/app/home/assigneduser">Assigned Users</NavLink>
                <NavLink className="list-group-item list-group-item-action" activeClassName="bg-success text-white" to="/app/home/assignedProjects">Assigned Projects</NavLink>
            </div >
        );


    }
}

export default SideNavPOCHome;
