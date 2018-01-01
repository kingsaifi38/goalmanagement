import React, { Component } from 'react';
import { Goal } from '../../ApiCalling/goal'
import { CSS } from '../../REACT-CSS/style'
import GoalProgressModel from '../Models/GoalProgressModel'
class UserCommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: props.userId,
            goalId: props.goalId,
            allComments: '',
            commentToPush: '',
        }
        this.addComments = this.addComments.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        Goal.getCommentsForGoal(this.state.goalId).then(response => {
            this.setState({
                allComments: response.data.data
            });
        });
    }

    shouldComponentUpdate(nextPorps, nextState) {
        if (this.state != nextState) {
            Goal.getCommentsForGoal(this.state.goalId).then(response => {
                this.setState({
                    allComments: response.data.data
                });
            });
            return true;
        } else {
            return false;
        }
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    addComments(event) {
        if (this.state.commentToPush != '') {
            const data = {
                comment: this.state.commentToPush,
                goalId: this.state.goalId,
                userlId: this.state.userId
            };
            Goal.setCommentForGoal(data).then(response => {
                console.log(response);
                this.setState({
                    commentToPush: ''
                });
            });
        }
    }

    getFormattedTime(time) {
        return new Date(time).toString().split('GMT')[0];
    }

    getAllComments() {
        const Comments = this.state.allComments;
        if (Comments !== '' && Comments.length != 0) {
            return (
                <div className="row">
                    {Comments.map((singleComment, index) => {
                        return (
                            <div className=" col-md-7 card mt-3 col-md-6 box-shadow" style={CSS.boxShadow} key={'_key' + index} >
                                <div className="card-body pb-0">
                                    <h6 className="card-title mb-1">@{singleComment.name}</h6>
                                    <blockquote>
                                        <p>{singleComment.comment}</p>
                                        <footer className="blockquote-footer">{this.getFormattedTime(singleComment.comment_date)}</footer >
                                    </blockquote>
                                </div>
                            </div >
                        )
                    })
                    }
                </div>
            );
        } else {
            return (
                <div className="card">
                    <div className="card-body">
                        Sorry you have no comments yet!
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="col-md-12">
                {this.getAllComments()}
                <div className="row"><div className="col-md-6"><hr /></div></div>
                <div className="row">
                    <div className="col-md-4">
                        <input className="form-control" value={this.state.commentToPush} name="commentToPush" onChange={this.handleChange} type="text" placeholder="Enter Comment here.." />
                    </div>
                    <div className="col-md-2">
                        <button className="form-control" onClick={this.addComments}>Comment</button>
                    </div>
                </div>
                <div className="row"><div className="col-md-6"><hr /></div></div>
            </div >
        );
    }
}
export default UserCommentSection;