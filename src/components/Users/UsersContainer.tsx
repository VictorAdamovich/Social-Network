import React from 'react';
import {connect} from 'react-redux';
import {Users} from './Users';
import {RootReduxType} from '../../redux/redux-store';
import {followToggleAC, setUsersAC, UserReducerType, UserType} from '../../redux/users-reducer';
import {Dispatch} from 'redux';

const mapStateToProps = (state: RootReduxType): UserReducerType => {
    return {
        users: state.usersPage.users
    };

};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        followToggle: (userID: number) => dispatch(followToggleAC(userID)),
        setUsers: (users: UserType[]) => dispatch(setUsersAC(users))
    };

};


export default connect(mapStateToProps, mapDispatchToProps)(Users);
