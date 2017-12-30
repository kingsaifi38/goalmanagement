import React, { Component } from 'react';
import { User } from '../../ApiCalling/User';

class GoalProgressModel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    shouldComponentUpdate(props, nextState) {
        this.props.setProgress(nextState);
        return true;

    }

    resetFormAndClose() {
        $('#form_' + this.state.id)[0].reset();
        $('#' + this.state.id).modal('hide');
    }

    render() {
        return (
            <div className="modal fade" id={this.state.id} tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <form onSubmit={this.props.handler} method="post" id={'form_' + this.state.id} className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Set Progress </h5>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-md-12">

                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 input-group">
                                    <textarea rows="5" required name="comment" className="form-control" onChange={this.handleChange} placeholder="Enter Comment for the progress" />
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
export default GoalProgressModel;