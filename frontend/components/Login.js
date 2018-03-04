import React from 'react';
import {connect} from 'react-redux';
import Title from './Title';
import {Component} from "react/lib/ReactBaseClasses";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }

    }

    handleUserNameInput(e) {
        this.setState({userName: e.target.value});
    }

    handlePasswordInput(e) {
        this.setState({password: e.target.value});
    }

    handleSubmit(){
        this.props.push('/')
    }

    render() {
        return (
            <div>
                <Title name={name}/>
                <h1>Login Page</h1>
                <form>
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
                            value="Submit">
                        </button>
                    </div>
                </form>
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
    return {};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
