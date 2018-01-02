import React, { Component } from 'react';

class PocAssignedProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allProjects: ''
        }
    }
    componentDidMount() {

    }

    render() {
        if (this.state.allProjects != '') {
            return (
                <ul className="list-group">
                    <li className="list-group-item">Project 1</li>
                    <li className="list-group-item">Project 2</li>
                    <li className="list-group-item">Project 3</li>
                    <li className="list-group-item">Project 4</li>
                    <li className="list-group-item">Project 5</li>
                    <li className="list-group-item">Project 6</li>
                </ul>
            )
        } else {
            return (
                <div className="card">
                    <div className="card-body">
                        No Projects assigned to you.
                    </div>
                </div>
            )
        }
    }
}

export default PocAssignedProject;
