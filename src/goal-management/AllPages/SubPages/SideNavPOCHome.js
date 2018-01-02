import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                <div className="list-group-item list-group-item-action">Assigned Users</div>
                <div className="list-group-item list-group-item-action" to="/app/home">Assigned Project</div>
                <div className="list-group-item list-group-item-action" to="/app/home">Assigned Project</div>
            </div >
        );


    }
}

export default SideNavPOCHome;
