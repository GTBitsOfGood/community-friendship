import React from 'react';
import {connect} from 'react-redux';
import {Component} from "react/lib/ReactBaseClasses";
import {login} from "../actions";
import {AUTH_STATE} from "../helpers";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleUserNameInput = this.handleUserNameInput.bind(this);
        this.handlePasswordInput = this.handlePasswordInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.checkAuthOutput = this.checkAuthOutput.bind(this);
    }

    handleUserNameInput(e) {
        this.setState({username: e.target.value});
    }

    handlePasswordInput(e) {
        this.setState({password: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state.username, this.state.password);
    }

    checkAuthOutput() {
        switch (this.props.authState) {
            case AUTH_STATE.LOGGED_IN:
                this.props.history.push('/');
                return;
            case AUTH_STATE.LOGGING_IN:
                return <h3>Checking User/pass combo</h3>;
            case AUTH_STATE.FAIL:
                return <h3>Incorrect User/pass combo</h3>;
            default:
                return;
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>Login Page</h1>
                    <div>
                        <label>Username</label>
                        <input
                            type="text"
                            name="username"
                            value={this.state.username}
                            required
                            onChange={this.handleUserNameInput}
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={this.state.password}
                            required
                            onChange={this.handlePasswordInput}
                        />
                    </div>
                    <div>
                        <button
                            type="Submit"
                            value="Submit">Submit
                        </button>
                    </div>
                    {this.checkAuthOutput()}
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        authState: state.auth.authState
    };
};

const mapDispatchToProps = (/* dispatch */) => {
    return {
        login: login
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps()
)(Login);
