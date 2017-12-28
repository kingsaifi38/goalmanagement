import React, { Component } from 'react';

class ActionForTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            goalId: props.goalId
        }
    }

    componentWillMount() {
        // console.log(this.state);
    }

    render() {
        return (
            <div>
                <button className="btn btn-success dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Goal  </button>
                <ul className="dropdown-menu">
                    <li className="dropdown-item"><i className="fa fa-plus fa-fw" /> Assign</li>
                    <li className="dropdown-item"><i className="fa fa-pencil fa-fw" /> Edit</li>
                    <li className="dropdown-item"><i className="fa fa-trash-o fa-fw" /> Delete</li>
                </ul>
            </div>
        );
    }
}
export default ActionForTable;