import React, { Component } from 'react';
import Tabs from '../AllPages/Navbar';
import PocGMPage from '../AllPages/SubPages/PocGMPage';
import UserGMPage from '../AllPages/SubPages/UserGMPage';
import { User } from '../ApiCalling/User'
import Cookies from 'universal-cookie';
class GoalManagement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            role: 0
        }
        this.cookies = new Cookies();
        ;
    }
    componentWillMount() {
        if (this.cookies.get('isAuthenticated') == 'true') {
            const userId = this.cookies.get('currentUser');
            User.getUserRole(userId).then(response => {
                this.setState({
                    role: response.data.data[0].role
                });
            });
        } else {
            this.cookies.remove('currentUser');
            this.cookies.remove('isAuthenticated');
            this.props.history.push("login");
        }
    }
    render() {
        switch (this.state.role) {
            case 3: return <PocGMPage />;
            case 2: return <UserGMPage />;
            default: return null;
        }
    }

}
export default GoalManagement;