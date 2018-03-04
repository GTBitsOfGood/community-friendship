import {Component} from "react/lib/ReactBaseClasses";
import {connect} from "react-redux";

class Home extends Component {
    render(){
        return <div></div>;
    }
}

const maoStateToProps = (state) => {
    return {};
};
const mapDispatchToProps = () => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps())(Home);