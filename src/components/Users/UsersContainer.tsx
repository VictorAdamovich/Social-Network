import React from 'react';
import {connect} from 'react-redux';
import {RootReduxType} from '../../redux/redux-store';
import {followToggleAC, setUsersAC, UserReducerType} from '../../redux/users-reducer';
import {Dispatch} from 'redux';
import {User, Users} from './Users';

const mapStateToProps = (state: RootReduxType): UserReducerType => {
    return {
        users: state.usersPage.users
    };

};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        followToggle: (userID: number) => dispatch(followToggleAC(userID)),
        setUsers: (users: User[]) => dispatch(setUsersAC(users))
    };

};


export default connect(mapStateToProps, mapDispatchToProps)(Users);
