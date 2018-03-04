import React, {Component} from 'react';
import {connect} from 'react-redux';

class Home extends Component {
    render(){
        return <div>landing page</div>;
    }
}

const mapStateToProps = (state) => {
    return {};
};
const mapDispatchToProps = () => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps())(Home);