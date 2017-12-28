import React, { Component } from 'react';
import { Goal } from '../../ApiCalling/goal'
import GoalDescription from '../SubPages/GoalDescription'
import Cookies from 'universal-cookie';

class AllAssignedGoal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allGoal: '',
            userId: '',
            mode: 'table',
            descriptionId: '',
            currentGoalInfo: ''
        }
        this.cookies = new Cookies();
    }

    componentWillMount() {
        const userId = this.cookies.get('currentUser');
        this.setState({
            userId: userId
        });
        Goal.getAllGoalAssigned(userId).then(response => {
            this.setState({
                allGoal: response.data.data
            });
        });
    }

    componentWillUpdate(nextProps, nextState) {

    }

    renderTableBody() {
        if (this.state.allGoal != '') {
            const goals = this.state.allGoal;
            return (
                goals.map((singleGoal, index) => {
                    const startDate = singleGoal.goal_start_date.split('T')[0];
                    const endtDate = singleGoal.goal_end_date.split('T')[0];
                    return (<tr key={'p_' + index}>
                        <th scope="row">{index + 1}</th>
                        <td><a href="#" onClick={() => {
                            this.setState({
                                mode: 'description',
                                descriptionId: singleGoal.goal_id,
                                currentGoalInfo: singleGoal
                            })
                        }}>{singleGoal.goal_title}</a></td>
                        <td>{singleGoal.goal_description}</td>
                        <td>{singleGoal.name}</td>
                        <td>{startDate}</td>
                        <td>{endtDate}</td>
                        <td>0% (static now)</td>

                    </tr>);
                })
            );
        }
    }

    render() {
        if (this.state.mode == "table") {
            return (
                <table className="table table-striped table-bordered">
                    <thead >
                        <tr className="bg-success text-white">
                            <th>#</th>
                            <th >Goal</th>
                            <th width="30%">Description</th>
                            <th width="12%">Assigned by</th>
                            <th width="10%">Start Date</th>
                            <th width="10%">End Date</th>
                            <th>Progress</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTableBody()}
                    </tbody>
                </table >
            );
        } else {
            return (
                <GoalDescription currentGoalInfo={this.state.currentGoalInfo} />
            );
        }
    }
}
export default AllAssignedGoal;