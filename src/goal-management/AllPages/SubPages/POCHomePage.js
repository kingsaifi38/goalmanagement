import React, { Component } from 'react';
import SideNavPOCHome from './sideNavPOCHome';

class POCHomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {

    }
    render() {
        return (
            <div className="row">
                <SideNavPOCHome />

                <div className="col-md-10">
                    <ul className="list-group">
                        <li className="list-group-item">User 1</li>
                        <li className="list-group-item">User 2</li>
                        <li className="list-group-item">User 3</li>
                        <li className="list-group-item">User 4</li>
                        <li className="list-group-item">User 5</li>
                        <li className="list-group-item">User 6</li>
                    </ul>
                </div>
            </div>
        );


    }
}

export default POCHomePage;
