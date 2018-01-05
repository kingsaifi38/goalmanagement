import React, { Component } from 'react';
import ActionForTable from '../Components/ActionForTable'
import { Goal } from '../../ApiCalling/goal'
import Cookies from 'universal-cookie';

class AllGoalTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allGoal: '',
            userId: ''
        }
        this.cookies = new Cookies();
    }
    //userr id
    componentWillMount() {
        const userId = this.cookies.get('currentUser');
        this.setState({
            userId: userId
        });
        Goal.getAllGoalByUser(userId).then(response => {
            this.setState({
                allGoal: response.data.data
            });
        });
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
                        <td>{singleGoal.goal_title}</td>
                        <td>{singleGoal.goal_description}</td>
                        <td>{singleGoal.name}</td>
                        <td>{startDate}</td>
                        <td>{endtDate}</td>
                        <td>0% (static now)</td>
                        <td><ActionForTable goalId={singleGoal.goal_id} /></td>
                    </tr>);
                })
            );
        }
    }

    render() {
        return (
            <table className="table table-striped">
                <thead >
                    <tr className="bg-success text-white">
                        <th>#</th>
                        <th >Goal</th>
                        <th width="30%">Description</th>
                        <th>Assigned to</th>
                        <th width="10%">Start Date</th>
                        <th width="10%">End Date</th>
                        <th>Progress</th>
                        <th width="10%" >Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderTableBody()}
                </tbody>
            </table>
        );
    }
}
export default AllGoalTable;