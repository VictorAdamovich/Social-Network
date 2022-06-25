import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {setAuthUserDate} from '../../redux/auth-reducer';
import {RootReduxType} from '../../redux/redux-store';
import {authAPI} from '../../API/AuthAPI';


class HeaderContainer extends React.Component<any, any> {
    componentDidMount() {
        authAPI.getAuth()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data;
                    this.props.setAuthUserDate({id, login, email});
                }
            });
    }

    render() {
        return <Header {...this.props}/>;
    }
}


const mapStateToProps = (state: RootReduxType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, {setAuthUserDate})(HeaderContainer);
