import React, { Component } from 'react';
import { LoginAuth } from '../ApiCalling/LoginAuth';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            passwordconfirm: false,
            username: '',
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value });
        if (name == "password") {
            this.samePassword();
        }
    }
    handleSubmit(event) {

        if (this.state.passwordconfirm) {
            console.log(this.state);
            LoginAuth.makeSignUp(this.state.username, this.state.email, this.state.password).then(response => {
                if (response.data.status == "success") {
                    $('#formError').text('Thanks for connecting with us, Redirecting to Login.....')
                        .addClass('alert-success')
                        .removeClass('d-none');
                    setTimeout(() => {
                        this.props.history.push('login');
                    }, 3000);
                } else {
                    $('#formError').text('Something went wrong, User may Exist!')
                        .addClass('alert-danger')
                        .removeClass('d-none');
                }
            });
        }
        event.preventDefault();
    }

    samePassword() {
        var password = document.getElementById('password').value;
        var confirm = document.getElementById('confirmPassword').value;
        if (password == confirm) {
            this.setState({ passwordconfirm: true });
            $('#passwordError').addClass('d-none');
        } else {
            this.setState({ passwordconfirm: false });
            $('#passwordError').removeClass('d-none');
        }
        return this.state.passwordconfirm
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} method="post" className="form-horizontal">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <h2>Sign Up</h2>
                            <hr />
                            <span id="formError" className="alert d-none">
                            </span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <div className="form-group has-danger">
                                <label className="sr-only" htmlFor="name">Name</label>
                                <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                                    <div className="input-group-addon" style={{ width: '2.6rem' }}><i
                                        className="fa fa-file-text"></i></div>
                                    <input type="text" value={this.state.username} name="username" onChange={this.handleChange} className="form-control" id="name"
                                        placeholder="Enter your Name" required />
                                </div>
                            </div>
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
                                    <input type="email" value={this.state.email} name="email" onChange={this.handleChange} className="form-control" id="email"
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
                                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} className="form-control" id="password"
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
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="sr-only" htmlFor="confirmPassword">Confirm Password</label>
                                <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                                    <div className="input-group-addon" style={{ width: '2.6rem' }}><i
                                        className="fa fa-key"></i></div>
                                    <input type="password" onChange={() => this.samePassword()} name="confirmPassword" className="form-control" id="confirmPassword"
                                        placeholder="Confirm Password" required />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-control-feedback">
                                <span id="passwordError" className="text-danger align-middle d-none">
                                    Password Should be same!
                        </span>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{ paddingTop: '1rem' }}>
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <button type="submit" className="btn btn-success"><i
                                className="fa fa-sign-in"></i> SignUp
                            </button>
                        </div>
                    </div>
                </form>
            </div>

        );
    }
}

export default SignUp;
