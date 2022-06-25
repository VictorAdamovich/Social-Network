import {connect} from 'react-redux';
import {RootReduxType} from '../../redux/redux-store';
import {
    setCurrentPage,
    setFetching,
    setFollow,
    setTotalUsersCount,
    setUnfollow,
    setUsers,
    User,
    UserReducerType
} from '../../redux/users-reducer';
import React from 'react';
import Users from './Users';
import {Preloader} from '../common/Preloader/Preloader';
import {usersAPI} from '../../API/UsersAPI';

export type UserContainerPropsType = {
    users: User[]
    pageSize: number
    currentPage: number
    isFetching: boolean
    totalUsersCount: number
    setUsers: (users: User[]) => void
    setFollow: (userID: number) => void
    setUnfollow: (userID: number) => void
    setCurrentPage: (pageNumber: number) => void
    setFetching: (isFetching: boolean) => void
    setTotalUsersCount: (totalUsersCount: number) => void
}

export class UsersContainer extends React.Component<UserContainerPropsType, any> {
    componentDidMount() {
        this.props.setFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(res => {
                this.props.setFetching(false);
                this.props.setUsers(res.items);
                this.props.setTotalUsersCount(res.totalCount);
            });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setFetching(true);

        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(res => {
                this.props.setFetching(false);
                this.props.setUsers(res.items);
            });
    };

    render() {
        return (
            <>
                {this.props.isFetching
                    ? <Preloader/>
                    : <Users
                        users={this.props.users}
                        pageSize={this.props.pageSize}
                        totalUsersCount={this.props.totalUsersCount}
                        setFollow={this.props.setFollow}
                        setUnfollow={this.props.setUnfollow}
                        setCurrentPage={this.props.setCurrentPage}
                        currentPage={this.props.currentPage}
                        onPageChanged={this.onPageChanged}
                    />}
            </>
        );
    }
}

const mapStateToProps = (state: RootReduxType): UserReducerType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        isFetching: state.usersPage.isFetching,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount
    };

};

export default connect(mapStateToProps, {
    setUsers,
    setUnfollow,
    setFollow,
    setCurrentPage,
    setFetching,
    setTotalUsersCount
})(UsersContainer);