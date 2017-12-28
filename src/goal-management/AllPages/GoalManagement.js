import React, { Component } from 'react';
import Tabs from '../AllPages/Navbar';
import PocGMPage from '../AllPages/SubPages/PocGMPage';
import { User } from '../ApiCalling/User'
import Cookies from 'universal-cookie';
class GoalManagement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            role: 0
        }
        this.cookies = new Cookies();
    }
    componentWillMount() {
        const userId = this.cookies.get('currentUser');
        User.getUserRole(userId).then(response => {
            this.setState({
                role: response.data.data[0].role
            });
        });
    }
    render() {
        switch (this.state.role) {
            case 3:
                return (
                    <div>
                        <Tabs activeEle="Goal Management" />
                        <div className="container">
                            <h1>Goal Management</h1>
                            <hr />
                            <PocGMPage />
                        </div>
                    </div>
                );
            default: return null;
        }
    }

}
export default GoalManagement;