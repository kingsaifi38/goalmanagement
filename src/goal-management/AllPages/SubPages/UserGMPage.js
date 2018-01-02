import React, { Component } from 'react';
import AllAssignedGoal from '../SubPages/AllAssignedGoal';
class UserGMPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="container m-3">
                <div className="row">
                    <div className="col-md-12">
                        <AllAssignedGoal />
                    </div>
                </div>
            </div >
        );


    }
}

export default UserGMPage;
