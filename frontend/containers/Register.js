import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Title from '../components/Title';

const Register = ({ name }) => {
    return (
        <div>
            <Title name={name} />
            <h1>Registration Page</h1>
            <form action="/api/register" method="post">
                <div>
                    <label >Username</label>
                    <input type="text" name="username"/>
                </div>
                <div>
                    <label >Password</label>
                    <input type="text" name="password"/>
                </div>
                <div>
                    <input type ="submit"/>
                </div>

            </form>
        </div>
    );
};

Register.propTypes = {
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
)(Register);
