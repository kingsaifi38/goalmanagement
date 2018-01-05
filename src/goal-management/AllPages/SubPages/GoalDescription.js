import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import { Goal } from '../../ApiCalling/goal'
import UserCommentSection from '../Components/UserCommentSection'
import GoalProgressModel from '../Models/GoalProgressModel'


import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import SvgIcon from 'material-ui/SvgIcon';

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
            <Paper style={styles.paperStyle} rounded={false} zDepth={4}>
                <FlatButton labelStyle={styles.labelStyle} label="back" onClick={this.props.backButton} labelPosition="after">
                    <IconBack />
                </FlatButton>
                <Divider />
                <UserCommentSection key={this.state.key} goalId={this.state.currentGoalInfo.goal_id} userId={this.state.userId} />
            </Paper>

            // <div>
            //     <div className="row">
            //         <h3>{this.state.currentGoalInfo.goal_title}
            //             <small className="text-muted"><a href="#" onClick={() => { $('#GoalProgressModel').modal('show') }}> Progress ({this.state.goalProgress}%) </a> </small>
            //             <GoalProgressModel progress={this.state.currentGoalInfo.progress} handler={this.handler} setProgress={this.setProgress} id="GoalProgressModel" />
            //         </h3>
            //     </div>
            //     <div className="row">
            //         <UserCommentSection key={this.state.key} goalId={this.state.currentGoalInfo.goal_id} userId={this.state.userId} />
            //     </div>
            // </div>
        );
    }
}

const styles = {
    paperStyle: {
        width: '98%',
        margin: '1%',
        padding: '1%',
    },
    labelStyle: {
        verticalAlign: 'top',
        padding: '1px'
    }
}

const IconBack = React.createClass({
    render() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 52.502 52.502" style={{ enableBackground: "new 0 0 52.502 52.502" }} width="24px" height="100%">
                <g transform="matrix(0.895249 0 0 0.895249 2.27128 2.74982)"><g>
                    <path d="M21.524,16.094V4.046L1.416,23.998l20.108,20.143V32.094c0,0,17.598-4.355,29.712,16   c0,0,3.02-15.536-10.51-26.794C40.727,21.299,34.735,15.696,21.524,16.094z" data-original="#26B99A" className="active-path" data-old_color="#0D8CCE" fill="#0381C1" />
                    <path d="M51.718,50.857l-1.341-2.252C40.163,31.441,25.976,32.402,22.524,32.925v13.634L0,23.995   L22.524,1.644v13.431c12.728-0.103,18.644,5.268,18.886,5.494c13.781,11.465,10.839,27.554,10.808,27.715L51.718,50.857z    M25.645,30.702c5.761,0,16.344,1.938,24.854,14.376c0.128-4.873-0.896-15.094-10.41-23.01c-0.099-0.088-5.982-5.373-18.533-4.975   l-1.03,0.03V6.447L2.832,24.001l17.692,17.724V31.311l0.76-0.188C21.354,31.105,23.014,30.702,25.645,30.702z" data-original="#26B99A" className="active-path" data-old_color="#0D8CCE" fill="#0381C1" /></g>
                </g>
            </svg>
        )
    }
});

export default GoalDescription;