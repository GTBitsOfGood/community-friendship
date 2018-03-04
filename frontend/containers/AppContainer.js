import React from 'react';
import {connect} from 'react-redux';
import Register from "../components/Register";
import Login from "../components/Login";
import Route from "react-router-dom/es/Route";
import Switch from "react-router-dom/es/Switch";
import BrowserRouter from "react-router-dom/es/BrowserRouter";
import PDFViewer from "../components/PDFViewer";

const AppContainer = () => {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/employeehandbook" component={PDFViewer}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
};

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (/* dispatch */) => {
    return {};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer);
