import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {getAuth, } from '../../redux/auth-reducer';
import {RootReduxType} from '../../redux/redux-store';


class HeaderContainer extends React.Component<any, any> {
    componentDidMount() {
        this.props.getAuth()
    }

    render() {
        return <Header {...this.props}/>;
    }
}


const mapStateToProps = (state: RootReduxType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, {getAuth})(HeaderContainer);
