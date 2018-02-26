import React from 'react';
import PropTypes from 'prop-types';

const LoginForm = () => {
    return (
        <form action="/api/login" method="post">
            <div>
                <label for="username">Username</label>
                <input type="text" name="username"/>
            </div>
            <div>
                <label for="password">Password</label>
                <input type="text" name="password"/>
            </div>
            <div>
                <input type ="submit"/>
            </div>
        </form>
    );
};


export default LoginForm;
