import {connect} from 'react-redux';
import {RootReduxType} from '../../redux/redux-store';
import {
    followToggleAC,
    GetUsersResponse,
    setCurrentPageAC,
    setFetchingAC,
    setTotalUsersCountAC,
    setUsersAC,
    User,
    UserReducerType
} from '../../redux/users-reducer';
import {Dispatch} from 'redux';
import React from 'react';
import axios from 'axios';
import Users from './Users';
import {Preloader} from '../common/Preloader/Preloader';


type MapDispatchToPropsType = {
    setUsers: (users: User[]) => void
    followToggle: (userID: number) => void
    changePage: (pageNumber: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    setTotalUsersCount: (totalUsersCount: number) => void
}

export type UserContainerPropsType = {
    users: User[]
    pageSize: number
    currentPage: number
    isFetching: boolean
    totalUsersCount: number
    setUsers: (users: User[]) => void
    followToggle: (userID: number) => void
    changePage: (pageNumber: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    setTotalUsersCount: (totalUsersCount: number) => void
}

export class UsersContainer extends React.Component<UserContainerPropsType, any> {
    componentDidMount() {
        this.props.toggleIsFetching(true);

        axios.get<GetUsersResponse>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.toggleIsFetching(false);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.changePage(pageNumber);
        this.props.toggleIsFetching(true);

        axios.get<GetUsersResponse>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
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
                        followToggle={this.props.followToggle}
                        changePage={this.props.changePage}
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

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        setUsers: (users: User[]) => dispatch(setUsersAC(users)),
        followToggle: (userID: number) => dispatch(followToggleAC(userID)),
        changePage: (pageNumber: number) => dispatch(setCurrentPageAC(pageNumber)),
        toggleIsFetching: (isFetching: boolean) => dispatch(setFetchingAC(isFetching)),
        setTotalUsersCount: (totalUsersCount: number) => dispatch(setTotalUsersCountAC(totalUsersCount))

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
