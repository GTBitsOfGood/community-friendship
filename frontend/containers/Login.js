import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Title from '../components/Title';
import LoginForm from '../components/LoginForm';

const Login = ({ name }) => {
    return (
        <div>
            <Title name={name} />
            <h1>Login Page</h1>
            <LoginForm/>
        </div>
    );
};

Login.propTypes = {
    name: PropTypes.string,
};

const mapStateToProps = (state) => {
    return {
        name: state.name
    };
};

const mapDispatchToProps = (/* dispatch */) => {
    return {
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
