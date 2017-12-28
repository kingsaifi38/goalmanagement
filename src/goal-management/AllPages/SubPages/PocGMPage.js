import React, { Component } from 'react';
import GoalAssigneModel from '../Models/GoalAssigneModel'
import AllGoalTable from '../SubPages/AllGoals'

class PocGMPage extends Component {
    constructor(props) {
        super(props);
        this.checkForLogin = false;
        this.state = {

        }
    }
    render() {
        return (
            <div>
                {this.state.hadChanges}
                <div className="row" style={{ paddingTop: '1rem' }}>
                    <div className="col-md-6">
                        <div className="btn-group">
                            <button className="btn btn-success btn-lg" type="button" onClick={() => { $('#assignAGoalModel').modal('show'); }}>
                                Goal <i className="fa fa-plus fa-fw"></i> </button>
                            <GoalAssigneModel id="assignAGoalModel" />
                        </div>
                    </div>
                </div>
                <div className="row" style={{ paddingTop: '1rem' }}>
                    <div className="col-md-12">
                        <AllGoalTable />
                    </div>
                </div>
            </div >
        );


    }
}

export default PocGMPage;
