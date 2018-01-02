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

    getAllRow() {
        return (
            this.state.allUsers.map((value, index) => {
                return (
                    <div key={"allUsers_" + index} className="card">
                        <div className="card-header" role="tab" id="headingThree">
                            <h5 className="mb-0">
                                <a className="collapsed" data-toggle="collapse" href={"#allUsers_" + index} role="button" aria-expanded="false" aria-controls={"allUsers_" + index}>
                                    {value.name}
                                </a>
                            </h5>
                        </div>
                        <div id={"allUsers_" + index} className="collapse" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">
                            <div className="card-body">
                                {"Assigned Project"}
                            </div>
                        </div>
                    </div>
                );
            })
        )
    }

    render() {
        if (this.state.allUsers != '') {
            return (
                <div>
                    {this.getAllRow()}
                </div>
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
