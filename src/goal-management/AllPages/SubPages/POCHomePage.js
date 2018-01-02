import React, { Component } from 'react';
import SideNavPOCHome from './sideNavPOCHome';
import PocAssignedUser from './PocAssignedUser'
import PocAssignedProject from './PocAssignedProject'
class POCHomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            methods: "assignedUsers"
        }
    }

    getElementbyAction(actionName) {
        switch (this.state.methods) {
            case "assignedUsers": return <PocAssignedUser />
            case "assignedProjects": return <PocAssignedProject />
        }
    }

    render() {

        return (
            <div className="row" >
                <SideNavPOCHome />
                <div className="col-md-10">
                    {this.getElementbyAction(this.state.methods)}
                </div>
            </div>
        );
    }
}

export default POCHomePage;
