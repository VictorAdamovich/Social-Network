import {connect} from 'react-redux';
import {RootReduxType} from '../../redux/redux-store';
import {
    followToggleAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    User,
    UserReducerType
} from '../../redux/users-reducer';
import {Dispatch} from 'redux';
import {Users} from './Users';


type MapDispatchToPropsType = {
    followToggle: (userID: number) => void
    setUsers: (users: User[]) => void
    changePage:(pageNumber:number)=>void
    setTotalUsersCount:(totalUsersCount:number)=>void
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


export default connect(mapStateToProps, mapDispatchToProps)(Users);
