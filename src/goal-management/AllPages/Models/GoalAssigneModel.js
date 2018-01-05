import React, { Component } from 'react';
import { User } from '../../ApiCalling/User';
import Cookies from 'universal-cookie';

class GoalAssigneModel extends Component {
    constructor(props) {
        super(props);
        this.minDate = new Date().toLocaleDateString();
        var month = this.minDate.split('/')[0];
        var day = this.minDate.split('/')[1];
        var year = this.minDate.split('/')[2];
        this.minDate = year + '-' + month + '-' + day;
        this.maxDate = (parseInt(year) + 1) + '-' + month + '-' + day;
        this.cookies = new Cookies();
        this.currentUser = this.cookies.get('currentUser');
        this.state = {

        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        User.setGoalForUser(this.state).then(response => {
            this.resetFormAndClose();            
        });
        event.preventDefault();
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    componentWillMount() {
        this.state = {
            id: this.props.id,
            mode: 'add', // add/edit
            goalAssignee: '',
            userId: this.currentUser
        }

        User.allUsersForGoal(this.currentUser).then(response => {
            const userData = response.data.data;
            const assignee = userData[0].user_id;
            this.setState({
                allUserData: userData,
                goalAssignee: assignee
            });
        });

    }

    renderLabel(text) {
        return (
            <div className="row">
                <div className="col-md-12 input-group">
                    <label className="input-group-addon col-md-12">{text}</label>
                </div>
            </div>
        );
    }

    resetFormAndClose() {
        $('#form_' + this.state.id)[0].reset();
        $('#' + this.state.id).modal('hide');
    }

    renderOptions() {
        const data = this.state.allUserData;
        if (data) {
            return (
                data.map(function (user, index) {
                    return <option key={'o_' + index} value={user.user_id}>{user.name} ({user.username})</option>;
                })
            );
        }
    }

    render() {

        return (
            <div className="modal fade" id={this.state.id} tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <form onSubmit={this.handleSubmit} method="post" id={'form_' + this.state.id} className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Assign a Goal </h5>
                        </div>
                        <div className="modal-body">
                            {this.renderLabel('Title')}
                            <div className="row">
                                <div className="col-md-12 input-group">
                                    <input type="text" required name="goalTitle" className="form-control" onChange={this.handleChange} placeholder="Enter a title for Goal" />
                                </div>
                            </div>
                            <br />
                            {this.renderLabel('Description')}
                            <div className="row">
                                <div className="col-md-12 input-group">
                                    <textarea required className="form-control col-md-12" name="goalDescription" onChange={this.handleChange} placeholder="Give complete description about Goal" id="descriptionArea" rows="5"></textarea>
                                </div>
                            </div>
                            <br />
                            {this.renderLabel('Assignee')}
                            <div className="row">
                                <div className="col-md-12 input-group">
                                    <select required className="custom-select mb-2 mr-sm-2 mb-sm-0 col-md-6" name="goalAssignee" onChange={this.handleChange} id="inlineFormCustomSelect" defaultValue="0">
                                        {this.renderOptions()}
                                    </select>
                                </div>
                            </div>
                            <br />
                            {this.renderLabel('Start Date')}
                            <div className="row">
                                <div className="col-md-12 input-group">
                                    <input type="date" min={this.minDate} max={this.maxDate} required className="form-control col-md-12" name="startdate" id="startdate" value={this.state.startDate} onChange={this.handleChange} />
                                </div>
                            </div>
                            <br />
                            {this.renderLabel('End Date')}
                            <div className="row">
                                <div className="col-md-12 input-group">
                                    <input type="date" min={this.minDate} max={this.maxDate} required className="form-control date col-md-12" name="enddate" id="enddate" value={this.state.endDate} onChange={this.handleChange} />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary">Save changes</button>
                        </div>
                    </form>
                </div>
            </div>

        );
    }
}
export default GoalAssigneModel;