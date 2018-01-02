import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class SideNavPOCHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className="list-group col-md-2">
                <div className="list-group-item list-group-item-action" onClick={() => { this.props.changeMethod('assignedUsers') }}>Assigned Users</div>
                <div className="list-group-item list-group-item-action" onClick={() => { this.props.changeMethod('assignedProjects') }} >Assigned Project</div>
            </div>
        );
    }
}

export default SideNavPOCHome;
