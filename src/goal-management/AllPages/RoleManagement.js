import React, { Component } from 'react';
import Tabs from '../AllPages/Navbar';

class RoleManagement extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Tabs activeEle="Set a Goal" />
                <div className="container">
                    <h1>Role Management</h1>
                    <hr />
                </div>
            </div>
        );
    }

}
export default RoleManagement;