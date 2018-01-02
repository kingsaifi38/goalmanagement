import React, { Component } from 'react';
import { LoginAuth } from '../ApiCalling/LoginAuth';
import Cookies from 'universal-cookie';

class Login extends Component {
    constructor(props) {
        super(props);
        this.cookies = new Cookies();
        this.state = {

        }
    }
    componentWillMount() {
        if (this.cookies.get('isAuthenticated') == 'true') {
            this.props.history.push('home');
        }
    }

    login() {
        var usename = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        LoginAuth.isLogin(usename, password).then(response => {
            this.isAuthenticated = response.data.data[0].isLogin == 1;
            if (this.isAuthenticated) {
                this.cookies.set('isAuthenticated', 'true');
                this.cookies.set('currentUser', response.data.data[0].user_id);
                this.props.history.push('home');
            } else {
                $('#loginError').text('Something went wrong, User not Exist!')
                    .addClass('alert-danger')
                    .removeClass('d-none');
            }
        });
    }

    render() {
        return (
            <div className="container">
                <div className="form-horizontal">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <h2>Login</h2>
                            <hr />
                            <span id="loginError" className="alert d-none">
                            </span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <div className="form-group has-danger">
                                <label className="sr-only" htmlFor="email">E-Mail Address</label>
                                <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                                    <div className="input-group-addon" style={{ width: '2.6rem' }}><i
                                        className="fa fa-at"></i></div>
                                    <input type="text" name="email" className="form-control" id="email"
                                        placeholder="Email or User Name" required />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="sr-only" htmlFor="password">Password</label>
                                <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                                    <div className="input-group-addon" style={{ width: '2.6rem' }}><i
                                        className="fa fa-key"></i></div>
                                    <input type="password" name="password" className="form-control" id="password"
                                        placeholder="Password" required />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-control-feedback">
                                <span className="text-danger align-middle">
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{ paddingTop: '1rem' }}>
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <button type="button" className="btn btn-success" onClick={() => this.login()}><i
                                className="fa fa-sign-in"></i> Login
                            </button>
                            <a className="btn btn-link" href="signup">New User?</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;