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
            <div>
                <div className="row" style={{ paddingTop: '1rem' }}>
                    <div className="col-md-12">
                        <AllAssignedGoal />
                    </div>
                </div>
            </div >
        );


    }
}

export default UserGMPage;
