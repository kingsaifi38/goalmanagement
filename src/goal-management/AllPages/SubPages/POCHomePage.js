import React, { Component } from 'react';
import SideNavPOCHome from './SideNavPOCHome';
import PocAssignedUser from './PocAssignedUser'
import PocAssignedProject from './PocAssignedProject'
class POCHomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            methods: "assignedUsers"
        }
        this.changeMethodto = this.changeMethodto.bind(this);
    }

    getElementbyAction(actionName) {
        switch (this.state.methods) {
            case "assignedUsers": return <PocAssignedUser />
            case "assignedProjects": return <PocAssignedProject />
        }
    }

    changeMethodto(newMethod) {
        this.setState({
            methods: newMethod
        });
    }

    render() {
        return (
            <div className="row" >
                <SideNavPOCHome changeMethod={this.changeMethodto} />
                <div className="col-md-10">
                    {this.getElementbyAction(this.state.methods)}
                </div>
            </div>
        );
    }
}

export default POCHomePage;
