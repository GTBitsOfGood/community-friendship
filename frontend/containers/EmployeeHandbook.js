import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Title from '../components/Title';
import PDFViewer from '../components/PDFViewer';


const EmployeeHandbook = ({ name }) => {
    return (
        <div>
            <Title name={name} />
            <PDFViewer/>

        </div>
    );
};


EmployeeHandbook.propTypes = {
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
)(EmployeeHandbook);
