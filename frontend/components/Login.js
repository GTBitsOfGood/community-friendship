import React from 'react';
import {connect} from 'react-redux';
import {Component} from "react/lib/ReactBaseClasses";
import {login} from "../actions";

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
    }

    handleUserNameInput(e) {
        this.setState({username: e.target.value});
    }

    handlePasswordInput(e) {
        this.setState({password: e.target.value});
    }

    handleSubmit() {
        this.props.login(this.state.username, this.state.password);
        console.log('i clicked submit!');
    }

    render() {
        return (
            <div>
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
                        value="Submit"
                        onClick={this.handleSubmit}>Submit
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        name: state.name
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
