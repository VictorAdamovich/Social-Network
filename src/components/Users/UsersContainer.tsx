import {connect} from 'react-redux';
import {RootReduxType} from '../../redux/redux-store';
import {
    setCurrentPage,
    setFetching,
    setFollow,
    setFollowProgress,
    setTotalUsersCount,
    setUnfollow,
    setUsers,
    User,
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
    followingInProgress:number[]
    setUsers: (users: User[]) => void
    setFollow: (userID: number) => void
    setUnfollow: (userID: number) => void
    setCurrentPage: (pageNumber: number) => void
    setFetching: (isFetching: boolean) => void
    setFollowProgress:(status: boolean,userID:number)=>void
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
                        setFollow={this.props.setFollow}
                        setUnfollow={this.props.setUnfollow}
                        currentPage={this.props.currentPage}
                        setCurrentPage={this.props.setCurrentPage}
                        totalUsersCount={this.props.totalUsersCount}
                        followingInProgress={this.props.followingInProgress}
                        onPageChanged={this.onPageChanged}
                        setFollowProgress={this.props.setFollowProgress}
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
        followingInProgress:state.usersPage.followingInProgress
    };

};

export default connect(mapStateToProps, {
    setUsers,
    setFollow,
    setUnfollow,
    setFetching,
    setCurrentPage,
    setFollowProgress,
    setTotalUsersCount
})(UsersContainer);