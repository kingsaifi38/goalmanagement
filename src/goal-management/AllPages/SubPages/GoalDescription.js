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
            goalProgress: props.currentGoalInfo.progress,
            progressInfo: '',
            key: 0
        }
        this.InfoFromProgress = "";
        this.handler = this.handler.bind(this)
        this.setProgress = this.setProgress.bind(this);
    }

    resetFormAndClose() {
        $('#form_GoalProgressModel')[0].reset();
        $('#GoalProgressModel').modal('hide');
    }

    setProgress(someVal) {
        this.InfoFromProgress = someVal;
    }

    handler(e) {
        const data = {
            comment: this.InfoFromProgress.comment,
            goalId: this.state.currentGoalInfo.goal_id,
            userlId: this.state.userId,
            progress: this.InfoFromProgress.progress
        };
        Goal.setCommentsWithProgressForGoal(data).then(response => {
            this.resetFormAndClose();
            this.setState({
                progressInfo: this.InfoFromProgress,
                key: (this.state.key + 1),
                goalProgress: this.InfoFromProgress.progress
            });
        });
        e.preventDefault()
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state != nextState) {
            return true;
        } else {
            return false;
        }
    }

    render() {
        return (
            <div>
                <div className="row">
                    <h3>{this.state.currentGoalInfo.goal_title}
                        <small className="text-muted"><a href="#" onClick={() => { $('#GoalProgressModel').modal('show') }}> Progress ({this.state.goalProgress}%) </a> </small>
                        <GoalProgressModel progress={this.state.currentGoalInfo.progress} handler={this.handler} setProgress={this.setProgress} id="GoalProgressModel" />
                    </h3>
                </div>
                <div className="row">
                    <UserCommentSection key={this.state.key} goalId={this.state.currentGoalInfo.goal_id} userId={this.state.userId} />
                </div>
            </div>
        );
    }
}
export default GoalDescription;