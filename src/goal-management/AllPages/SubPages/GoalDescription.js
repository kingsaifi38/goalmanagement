import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import { Goal } from '../../ApiCalling/goal'

class GoalDescription extends Component {
    constructor(props) {
        super(props);
        this.cookies = new Cookies();
        const userId = this.cookies.get('currentUser');
        this.state = {
            userId: userId,
            allComments: '',
            currentGoalInfo: props.currentGoalInfo
        }
    }

    componentWillMount() {
        Goal.getCommentsForGoal(this.state.currentGoalInfo.goal_id).then(response => {
            this.setState({
                allComments: response.data.data
            });
        });
    }

    componentWillUpdate(nextProps, nextState) {

    }

    render() {
        console.log(this.state);
        return (
            <div className="row">
                <h3>{this.state.currentGoalInfo.goal_title}<small className="text-muted"> Progress (10%)</small></h3>
            </div>
        );
    }
}
export default GoalDescription;