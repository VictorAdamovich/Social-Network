import {connect} from 'react-redux';
import {RootReduxType} from '../../redux/redux-store';
import {
    followToggleAC, GetUsersResponse,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    User,
    UserReducerType
} from '../../redux/users-reducer';
import {Dispatch} from 'redux';
import React from 'react';
import axios from 'axios';
import Users from './Users';


type MapDispatchToPropsType = {
    followToggle: (userID: number) => void
    setUsers: (users: User[]) => void
    changePage:(pageNumber:number)=>void
    setTotalUsersCount:(totalUsersCount:number)=>void
}

export type UserAPIContainerPropsType = {
    users: User[]
    followToggle: (userID: number) => void
    setUsers: (users: User[]) => void
    changePage: (pageNumber: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

export class UsersContainer extends React.Component<UserAPIContainerPropsType, any> {
    componentDidMount() {
        axios.get<GetUsersResponse>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.changePage(pageNumber);
        axios.get<GetUsersResponse>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => this.props.setUsers(response.data.items));
    };


    render() {


        return (
            <Users
                users={this.props.users}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                followToggle={this.props.followToggle}
                changePage={this.props.changePage}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
            />
        );
    }

}

const mapStateToProps = (state: RootReduxType): UserReducerType => {
    return {
        users: state.usersPage.users,
        currentPage:state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount
    };

};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        followToggle: (userID: number) => dispatch(followToggleAC(userID)),
        setUsers: (users: User[]) => dispatch(setUsersAC(users)),
        changePage: (pageNumber:number) => dispatch(setCurrentPageAC(pageNumber)),
        setTotalUsersCount:(totalUsersCount:number)=>dispatch(setTotalUsersCountAC(totalUsersCount))
    };

};


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
