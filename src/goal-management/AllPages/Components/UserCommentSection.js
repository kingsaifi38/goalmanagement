import React, { Component } from 'react';
import { Goal } from '../../ApiCalling/goal'
import { CSS } from '../../REACT-CSS/style'
import GoalProgressModel from '../Models/GoalProgressModel'



import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import { grey400, darkBlack, lightBlack, deepOrange300, purple500, white } from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';






class UserCommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: props.userId,
            goalId: props.goalId,
            allComments: '',
            commentToPush: '',
            key: 0
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

    componentDidUpdate(prevProps, prevState) {
        if (this.state.key != prevState.key) {
            Goal.getCommentsForGoal(this.state.goalId).then(response => {
                this.setState({
                    allComments: response.data.data
                });
            });
        }
    }

    shouldComponentUpdate(nextPorps, nextState) {
        if (this.state != nextState) {
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
                this.setState({
                    commentToPush: '',
                    key: (this.state.key + 1)
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
                Comments.map((singleComment, index) => {
                    return (
                        <ListItem key={index}
                            leftAvatar={<Avatar />}
                            primaryText={'@' + singleComment.name}
                            secondaryText={<p><span style={singleCommentStyle}>{singleComment.comment}</span> --{this.getFormattedTime(singleComment.comment_date)}</p>}
                            secondaryTextLines={2} >
                        </ListItem>
                    )
                })
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

            <List style={{ width: '50%' }}>
                <Subheader>All Comments</Subheader>
                {this.getAllComments()}
                {/* <div className="row"><div className="col-md-6"><hr /></div></div>
                    <div className="row">
                        <div className="col-md-4">
                            <input className="form-control" value={this.state.commentToPush} name="commentToPush" onChange={this.handleChange} type="text" placeholder="Enter Comment here.." />
                        </div>
                        <div className="col-md-2">
                            <button className="form-control" onClick={this.addComments}>Comment</button>
                        </div>
                    </div>
                    <div className="row"><div className="col-md-6"><hr /></div></div> */}
            </List>

        );
    }
}


const iconButtonElement = (
    <IconButton
        touch={true}
        tooltip="more"
        tooltipPosition="bottom-left"
    >
        <MoreVertIcon color={grey400} />
    </IconButton>
);

const rightIconMenu = (
    <IconMenu iconButtonElement={iconButtonElement}>
        <MenuItem>Reply</MenuItem>
        <MenuItem>Forward</MenuItem>
        <MenuItem>Delete</MenuItem>
    </IconMenu>
);

const singleCommentStyle = {
    color: darkBlack,
}

export default UserCommentSection;