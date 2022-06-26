import {connect} from 'react-redux';
import {RootReduxType} from '../../redux/redux-store';
import {followUser, getUsers, unfollowUser, User} from '../../redux/users-reducer';
import React from 'react';
import Users from './Users';
import {Preloader} from '../common/Preloader/Preloader';

export type UserContainerPropsType = {
    users: User[]
    pageSize: number
    currentPage: number
    isFetching: boolean
    totalUsersCount: number
    followingInProgress: number[]
    getUsers: any,
    followUser: any,
    unfollowUser: any

}

export class UsersContainer extends React.Component<UserContainerPropsType, any> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    };

    render() {
        return (
            <>
                {this.props.isFetching
                    ? <Preloader/>
                    : <Users
                        users={this.props.users}
                        pageSize={this.props.pageSize}
                        followUser={this.props.followUser}
                        unfollowUser={this.props.unfollowUser}
                        currentPage={this.props.currentPage}
                        totalUsersCount={this.props.totalUsersCount}
                        followingInProgress={this.props.followingInProgress}
                        onPageChanged={this.onPageChanged}
                    />}
            </>
        );
    }
}

const mapStateToProps = (state: RootReduxType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        isFetching: state.usersPage.isFetching,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        followingInProgress: state.usersPage.followingInProgress
    };

};

export default connect(mapStateToProps, {
    followUser,
    unfollowUser,
    getUsers
})(UsersContainer);