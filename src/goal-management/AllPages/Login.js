import React, { Component } from 'react';
import { LoginAuth } from '../ApiCalling/LoginAuth';
import Cookies from 'universal-cookie';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import { blue900, grey900 } from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';

class Login extends Component {
    constructor(props) {
        super(props);
        this.cookies = new Cookies();
        this.state = {
        }
        this.handleChange = this.handleChange.bind(this);
        this.login = this.login.bind(this);
    }

    componentWillMount() {

        if (this.cookies.get('isAuthenticated')) {
            this.props.setLoginState(true);
        }

    }

    login(event) {
        LoginAuth.isLogin(this.state.userName, this.state.userPassword).then(response => {
            this.isAuthenticated = response.data.data[0].isLogin == 1;
            if (this.isAuthenticated) {
                this.cookies.set('isAuthenticated', true);
                this.cookies.set('currentUser', response.data.data[0].user_id);
                this.props.setLoginState(true);

            } else {
                this.props.setLoginState(false);
            }
        });
    }

    handleChange(event, value) {
        const name = event.target.name
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <Paper style={styles.paperStyle} rounded={false} zDepth={4}>
                <TextField floatingLabelStyle={styles.textFieldStyle.floatingLabelStyle} onChange={this.handleChange}
                    floatingLabelFocusStyle={styles.textFieldStyle.floatingLabelFocusStyle} name="userName"
                    hintText="Enter your Username" floatingLabelText="Username" fullWidth={true}
                />
                <br />
                <TextField type="password" floatingLabelStyle={styles.textFieldStyle.floatingLabelStyle} name="userPassword"
                    floatingLabelFocusStyle={styles.textFieldStyle.floatingLabelFocusStyle} onChange={this.handleChange}
                    hintText="Enter your Password" floatingLabelText="Password" fullWidth={true}
                />
                <br />
                <br />
                <RaisedButton
                    label="Login" onClick={this.login}
                    primary={true}
                />
            </Paper>
        );
    }
}

const styles = {
    paperStyle: {
        width: '50%',
        marginLeft: '25%',
        marginRight: '25%',
        marginTop: '10%',
        paddingTop: '3%',
        paddingBottom: '4%',
        paddingRight: '4%',
        paddingLeft: '4%',
    },
    textFieldStyle: {
        floatingLabelStyle: {
            color: grey900,
        },
        floatingLabelFocusStyle: {
            color: grey900,
        },
    }
};

const IconLogin = React.createClass({
    render() {
        return (
            <svg style={{ marginTop: '.5em' }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14c0-1.11-.9-2-2-2zM11 16l4-4-4-4v3H1v2h10v3z" /></svg>
        )
    }
});

export default Login;