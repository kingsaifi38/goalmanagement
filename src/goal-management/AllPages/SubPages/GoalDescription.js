import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import { Goal } from '../../ApiCalling/goal'
import UserCommentSection from '../Components/UserCommentSection'
import GoalProgressModel from '../Models/GoalProgressModel'

class GoalDescription extends Component {
    constructor(props) {
        super(props);
        this.cookies = new Cookies();
        const userId = this.cookies.get('currentUser');
        this.state = {
            userId: userId,
            currentGoalInfo: props.currentGoalInfo,
        }
    }

    render() {
        return (
            <div>
                <div className="row">
                    <h3>{this.state.currentGoalInfo.goal_title}
                        <small className="text-muted"><a href="#" onClick={() => { $('#GoalProgressModel').modal('show') }}> Progress ({this.state.currentGoalInfo.progress}%) </a> </small>
                        <GoalProgressModel id="GoalProgressModel" />
                    </h3>
                </div>
                <div className="row">
                    <UserCommentSection goalId={this.state.currentGoalInfo.goal_id} userId={this.state.userId} />
                </div>
            </div>
        );
    }
}
export default GoalDescription;