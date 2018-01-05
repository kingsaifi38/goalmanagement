import React, { Component } from 'react';
import { Goal } from '../../ApiCalling/goal'
import GoalDescription from '../SubPages/GoalDescription'
import Cookies from 'universal-cookie';

import Paper from 'material-ui/Paper';
import { blue300, yellow50 } from 'material-ui/styles/colors';
import {
    Table,
    TableBody,
    TableFooter,
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
                    return (<tr key={'p_' + index}>
                        <th scope="row">{index + 1}</th>
                        <td><a href="javascript:void(0)" onClick={() => {
                            this.setState({
                                mode: 'description',
                                descriptionId: singleGoal.goal_id,
                                currentGoalInfo: singleGoal
                            })
                        }}>{singleGoal.goal_title}</a></td>
                        <td>{singleGoal.goal_description}</td>
                        <td>{singleGoal.name}</td>
                        <td>{startDate}</td>
                        <td>{endtDate}</td>
                        <td>{singleGoal.progress}%</td>
                    </tr>);
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
                                <TableHeaderColumn style={styles.TableHeaderColumn}>ID</TableHeaderColumn>
                                <TableHeaderColumn style={styles.TableHeaderColumn}>Name</TableHeaderColumn>
                                <TableHeaderColumn style={styles.TableHeaderColumn}>Status</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody displayRowCheckbox={false}>
                            <TableRow hoverable={true}>
                                <TableRowColumn>1</TableRowColumn>
                                <TableRowColumn>John Smith</TableRowColumn>
                                <TableRowColumn>Employed</TableRowColumn>
                            </TableRow>
                            <TableRow>
                                <TableRowColumn>2</TableRowColumn>
                                <TableRowColumn>Randal White</TableRowColumn>
                                <TableRowColumn>Unemployed</TableRowColumn>
                            </TableRow>
                            <TableRow>
                                <TableRowColumn>3</TableRowColumn>
                                <TableRowColumn>Stephanie Sanders</TableRowColumn>
                                <TableRowColumn>Employed</TableRowColumn>
                            </TableRow>
                            <TableRow>
                                <TableRowColumn>4</TableRowColumn>
                                <TableRowColumn>Steve Brown</TableRowColumn>
                                <TableRowColumn>Employed</TableRowColumn>
                            </TableRow>
                            <TableRow>
                                <TableRowColumn>5</TableRowColumn>
                                <TableRowColumn>Christopher Nolan</TableRowColumn>
                                <TableRowColumn>Unemployed</TableRowColumn>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Paper>
            );
        } else {
            return (
                <GoalDescription currentGoalInfo={this.state.currentGoalInfo} />
            );
        }
    }
}

const styles = {
    paperStyle: {
        width: '98%',
        margin: '1%',
        padding: '1%',
    }, headerStyle:
        {
            backgroundColor: blue300,
        }, TableHeaderColumn: {
            color: yellow50
        }
};

export default AllAssignedGoal;