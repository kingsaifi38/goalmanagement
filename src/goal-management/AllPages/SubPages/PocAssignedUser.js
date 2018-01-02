import React, { Component } from 'react';
import { User } from '../../ApiCalling/User';
import Cookies from 'universal-cookie';
class PocAssignedUser extends Component {
    constructor(props) {
        super(props);
        this.cookies = new Cookies();
        this.state = {
            allUsers: '',
            currentUser: this.cookies.get('currentUser')
        }

    }
    componentDidMount() {
        User.allUsersForGoal(this.state.currentUser).then(response => {
            this.setState({
                allUsers: response.data.data
            });
        });
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextState != this.state
    }

    render() {
        if (this.state.allUsers != '') {
            return (
                <ul className="list-group">
                    <li className="list-group-item">User 1</li>
                    <li className="list-group-item">User 2</li>
                    <li className="list-group-item">User 3</li>
                    <li className="list-group-item">User 4</li>
                    <li className="list-group-item">User 5</li>
                    <li className="list-group-item">User 6</li>
                </ul>
            )
        } else {
            return (
                <div className="card">
                    <div className="card-body">
                        No User assigned to you.
                    </div>
                </div>
            )
        }
    }
}

export default PocAssignedUser;
