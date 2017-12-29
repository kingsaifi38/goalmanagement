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
        }
        this.addComments = this.addComments.bind(this);
    }

    componentWillMount() {
        Goal.getCommentsForGoal(this.state.goalId).then(response => {
            this.setState({
                allComments: response.data.data
            });
        });
    }

    addComments(event) {
        alert(event.target.tagName);
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
                        <input className="form-control" type="text" />
                    </div>
                    <div className="col-md-2">
                        <button className="form-control" onClick={this.addComments}>Comment</button>
                    </div>

                </div>
            </div >
        );
    }
}
export default UserCommentSection;