import PropTypes from 'prop-types';
import React from 'react';
import {Provider} from 'react-redux';
import AppContainer from './AppContainer.js';
import DevTools from './DevTools';
import Login from './Login.js';
import Register from './Register.js';
import EmployeeHandbook from './EmployeeHandbook.js';
import Navbar from '../components/Navbar.js'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


export default function Root({ store }) {
    return (
        <Provider store={store}>
            <div>
                <Navbar/>
                <Router>
                    <div>
                        <Switch>
                            <Route path="/home" component={AppContainer}/>
                            <Route path="/login" component={Login}/>
                            <Route path="/register" component={Register}/>
                            <Route path="/employeehandbook" component={EmployeeHandbook}/>
                        </Switch>
                    </div>
                </Router>
                <DevTools/>
            </div>
        </Provider>
    );
}

Root.propTypes = {
    store: PropTypes.object.isRequired
};
