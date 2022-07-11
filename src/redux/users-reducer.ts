import {usersAPI} from '../API/UsersAPI';
import {followAPI} from '../API/FollowAPI';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS-USERS';
const SET_CURRENT_PAGE = 'SET-SET_CURRENT_PAGE-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

export const usersReducer = (state: UserReducerType = initialState, action: UsersACType): UserReducerType => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map((u: User) => u.id === action.payload.userID ? {
                    ...u,
                    followed: true
                } : u)
            };
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map((u: User) => u.id === action.payload.userID ? {
                    ...u,
                    followed: false
                } : u)
            };
        }
        case SET_USERS: {
            return {
                ...state,
                users: [...action.payload.users]
            };
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.payload.pageNumber
            };
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.payload.totalUsersCount
            };
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.payload.isFetching
            };
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.payload.status
                    ? [...state.followingInProgress, action.payload.userID]
                    : state.followingInProgress.filter((id: number) => id !== action.payload.userID)
            };
        }
        default: {
            return state;
        }
    }
};

export type UsersACType = ReturnType<typeof setUnfollow>
    | ReturnType<typeof setFollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof setFetching>
    | ReturnType<typeof setFollowProgress>


export const setFollow = (userID: number) => ({type: FOLLOW, payload: {userID}} as const);
export const setUnfollow = (userID: number) => ({
    type: UNFOLLOW,
    payload: {userID}
} as const);
export const setUsers = (users: User[]) => ({type: SET_USERS, payload: {users}} as const);
export const setCurrentPage = (pageNumber: number) => ({
    type: SET_CURRENT_PAGE,
    payload: {pageNumber}
} as const);
export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: SET_TOTAL_USERS_COUNT,
    payload: {totalUsersCount}
} as const);
export const setFetching = (isFetching: boolean) => ({
    type: TOGGLE_IS_FETCHING,
    payload: {isFetching}
} as const);
export const setFollowProgress = (status: boolean, userID: number) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    payload: {status, userID}
} as const);


export const getUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: any) => {
        dispatch(setFetching(true));
        usersAPI.getUsers(currentPage, pageSize)
            .then(res => {
                dispatch(setFetching(false));
                dispatch(setUsers(res.items));
                dispatch(setTotalUsersCount(res.totalCount))
                ;
            });
    };
};

export const followUser = (userID: number) => {
    return (dispatch: any) => {
        dispatch(setFollowProgress(true, userID));
        followAPI.followUser(userID)
            .then((res: any) => {
                console.log(res);
                if (res.data.resultCode === 0) {
                    dispatch(setFollow(userID));
                }
                dispatch(setFollowProgress(false, userID));
            });
    };
};

export const unfollowUser = (userID: number) => {
    return (dispatch: any) => {
        dispatch(setFollowProgress(true, userID));
        followAPI.unfollowUser(userID)
            .then((res: any) => {
                console.log(res);
                if (res.data.resultCode === 0) {
                    dispatch(setUnfollow(userID));
                }
                dispatch(setFollowProgress(false, userID));
            });

    };
};


export type UserReducerType = {
    users: User[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

export type User = {
    name: string;
    id: number;
    uniqueUrlName?: string;
    photos: Photos;
    status: string;
    followed: boolean;
}

export type Photos = {
    small: string;
    large: string;
}

export type GetUsersResponse = {
    items: User[];
    totalCount: number;
    error?: any;
}

const initialState: UserReducerType = {
    users: [],
    pageSize: 100,
    totalUsersCount: 21,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [1, 2, 3]
};

