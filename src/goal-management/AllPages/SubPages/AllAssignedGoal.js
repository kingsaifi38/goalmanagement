import React, { Component } from 'react';
import { Goal } from '../../ApiCalling/goal'
import GoalDescription from '../SubPages/GoalDescription'
import Cookies from 'universal-cookie';

import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import { cyan700, white } from 'material-ui/styles/colors';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

class AllAssignedGoal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allGoal: '',
            userId: '',
            mode: 'table',
            descriptionId: '',
            currentGoalInfo: ''
        }
        this.cookies = new Cookies();
        this.backButton = this.backButton.bind(this);
    }

    componentWillMount() {
        const userId = this.cookies.get('currentUser');
        this.setState({
            userId: userId
        });
        Goal.getAllGoalAssigned(userId).then(response => {
            this.setState({
                allGoal: response.data.data
            });
        });
    }

    componentWillUpdate(nextProps, nextState) {

    }

    renderTableBody() {
        if (this.state.allGoal != '') {
            const goals = this.state.allGoal;
            return (
                goals.map((singleGoal, index) => {
                    const startDate = singleGoal.goal_start_date.split('T')[0];
                    const endtDate = singleGoal.goal_end_date.split('T')[0];
                    return (
                        <TableRow key={'p_' + index} hoverable={true}>
                            <TableRowColumn style={styles.TableRowColumn0}>{index + 1}</TableRowColumn>
                            <TableRowColumn style={styles.TableRowColumn}><FlatButton fullWidth={true} style={{ textAlign: 'left' }} labelStyle={{ textTransform: 'capitalize' }} primary={true} label={singleGoal.goal_title} onClick={() => {
                                this.setState({
                                    mode: 'description',
                                    descriptionId: singleGoal.goal_id,
                                    currentGoalInfo: singleGoal
                                })
                            }}></FlatButton > </TableRowColumn>
                            <TableRowColumn style={styles.TableRowColumn1}>{singleGoal.goal_description}</TableRowColumn>
                            <TableRowColumn style={styles.TableRowColumn}>{singleGoal.name}</TableRowColumn>
                            <TableRowColumn style={styles.TableRowColumn}>{startDate}</TableRowColumn>
                            <TableRowColumn style={styles.TableRowColumn}>{endtDate}</TableRowColumn>
                            <TableRowColumn style={styles.TableRowColumn}>{singleGoal.progress}%</TableRowColumn>
                        </TableRow>
                    )
                })
            );
        }
    }

    render() {
        if (this.state.mode == "table") {
            return (
                <Paper style={styles.paperStyle} rounded={false} zDepth={4}>
                    <Table>
                        <TableHeader style={styles.headerStyle} displaySelectAll={false}
                            adjustForCheckbox={false}>
                            <TableRow>
                                <TableHeaderColumn style={styles.TableHeaderColumn0}>#</TableHeaderColumn>
                                <TableHeaderColumn style={styles.TableHeaderColumn}>Title</TableHeaderColumn>
                                <TableHeaderColumn style={styles.TableHeaderColumn1}>Description</TableHeaderColumn>
                                <TableHeaderColumn style={styles.TableHeaderColumn}>Assigned by</TableHeaderColumn>
                                <TableHeaderColumn style={styles.TableHeaderColumn}>Start Date</TableHeaderColumn>
                                <TableHeaderColumn style={styles.TableHeaderColumn}>End Date</TableHeaderColumn>
                                <TableHeaderColumn style={styles.TableHeaderColumn}>Progress</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody displayRowCheckbox={false}>
                            {this.renderTableBody()}

                        </TableBody>
                    </Table>
                </Paper>
            );
        } else {
            return (
                <GoalDescription backButton={this.backButton} currentGoalInfo={this.state.currentGoalInfo} />
            );
        }
    }

    backButton(event) {
        this.setState({ mode: 'table' });
    }
}

const styles = {
    paperStyle: {
        width: '98%',
        margin: '1%',
        padding: '1%',
    }, headerStyle: {
        backgroundColor: cyan700,
    },
    TableHeaderColumn: {
        color: white
    },
    TableHeaderColumn1: {
        color: white,
        width: '30%'
    },
    TableHeaderColumn0: {
        color: white,
        width: '5%'
    },
    TableRowColumn: {
        textOverflow: 'unset',
        whiteSpace: 'normal',
    },
    TableRowColumn1: {
        textOverflow: 'unset',
        whiteSpace: 'normal',
        width: '30%'
    },
    TableRowColumn0: {
        textOverflow: 'unset',
        whiteSpace: 'normal',
        width: '5%'
    }
};

export default AllAssignedGoal;