import {connect} from 'react-redux';
import {RootReduxType} from '../../redux/redux-store';
import {
    GetUsersResponse,
    setCurrentPage,
    setFetching,
    setFollowToggle,
    setTotalUsersCount,
    setUsers,
    User,
    UserReducerType
} from '../../redux/users-reducer';
import React from 'react';
import axios from 'axios';
import Users from './Users';
import {Preloader} from '../common/Preloader/Preloader';


export type UserContainerPropsType = {
    users: User[]
    pageSize: number
    currentPage: number
    isFetching: boolean
    totalUsersCount: number
    setUsers: (users: User[]) => void
    setFollowToggle: (userID: number) => void
    setCurrentPage: (pageNumber: number) => void
    setFetching: (isFetching: boolean) => void
    setTotalUsersCount: (totalUsersCount: number) => void
}

export class UsersContainer extends React.Component<UserContainerPropsType, any> {
    componentDidMount() {
        this.props.setFetching(true);

        axios.get<GetUsersResponse>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setFetching(false);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setFetching(true);

        axios.get<GetUsersResponse>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setFetching(false);
                this.props.setUsers(response.data.items);
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
                        setFollowToggle={this.props.setFollowToggle}
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
    setFollowToggle,
    setCurrentPage,
    setFetching,
    setTotalUsersCount
})(UsersContainer);
