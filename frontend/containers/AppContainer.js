import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import EmployeeHandbook from "../components/EmployeeHandbook";
import Register from "../components/Register";
import Login from "../components/Login";
import Route from "react-router-dom/es/Route";
import Switch from "react-router-dom/es/Switch";
import BrowserRouter from "react-router-dom/es/BrowserRouter";

const AppContainer = ({name}) => {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/employeehandbook" component={EmployeeHandbook}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
};

AppContainer.propTypes = {
    name: PropTypes.string,
};

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
)(AppContainer);
