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
            progressInfo: ''

        }
        this.someVar = "";
        this.handler = this.handler.bind(this)
        this.setProgress = this.setProgress.bind(this);
    }

    resetFormAndClose() {
        $('#form_GoalProgressModel')[0].reset();
        $('#GoalProgressModel').modal('hide');
    }

    setProgress(someVal) {
        this.someVar = someVal;
    }

    handler(e) {
        this.resetFormAndClose();
        this.setState({
            progressInfo: this.someVar
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
                        <small className="text-muted"><a href="#" onClick={() => { $('#GoalProgressModel').modal('show') }}> Progress ({this.state.currentGoalInfo.progress}%) </a> </small>
                        <GoalProgressModel handler={this.handler} setProgress={this.setProgress} id="GoalProgressModel" />
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