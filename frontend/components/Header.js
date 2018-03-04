import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchUser, login} from "../actions";
import {AUTH_STATE} from "../helpers";

class Header extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    authOutput() {
        switch (this.props.authState) {
            case AUTH_STATE.LOGGED_IN:
                return <a href={'/api/auth/logout'}>log out</a>;
            case AUTH_STATE.NOTHING:
                return <Link to={'/login'}>Log in</Link>;
            default:
                return '';
        }
    }

    render() {
        return (
            <nav>
                <h1>
                    <Link to={'/'}>
                        Community Friendship
                    </Link>
                </h1>

                <h3>
                    {this.authOutput()}
                </h3>

            </nav>
        );
    }
}

function mapStateToProps(state) {
    return {
        authState: state.auth.authState,
        user: state.auth.user
    };
}

function mapDispathToProps() {
    return {
        fetchUser: fetchUser,
    };
}

export default connect(mapStateToProps, mapDispathToProps())(Header);
