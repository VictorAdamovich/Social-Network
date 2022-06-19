const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW-FOLLOW';
const SET_USERS = 'SET_USERS-USERS';
const SET_CURRENT_PAGE = 'SET-SET_CURRENT_PAGE-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

export type UserReducerType = {
    users: User[]
    pageSize:number
    totalUsersCount:number
    currentPage:number
}

export interface Photos {
    small: string;
    large: string;
}

export interface User {
    name: string;
    id: number;
    uniqueUrlName?: string;
    photos: Photos;
    status: string;
    followed: boolean;
}

export interface GetUsersResponse {
    items: User[];
    totalCount: number;
    error?: any;
}

type UsersACType = ReturnType<typeof followToggleAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUsersCountAC>

const initialState: UserReducerType = {
    users: [],
    pageSize:100,
    totalUsersCount:21,
    currentPage:1
};

export const usersReducer = (state: UserReducerType = initialState, action: UsersACType): UserReducerType => {
    switch (action.type) {
        case TOGGLE_FOLLOW: {
            return {
                ...state,
                users: state.users.map((u: User) => u.id === action.payload.userID ? {
                    ...u,
                    followed: !u.followed
                } : u)
            };
        }
        case SET_USERS: {
            return {
                ...state,
                users: [...action.payload.users]
            };
        }
        case SET_CURRENT_PAGE:{
            return {
                ...state,
                currentPage:action.payload.pageNumber
            }
        }
        case SET_TOTAL_USERS_COUNT:{
            return {
                ...state,
                totalUsersCount:action.payload.totalUsersCount
            }
        }
        default: {
            return state;
        }
    }
};


export const followToggleAC = (userID: number) => ({type: TOGGLE_FOLLOW, payload: {userID}}) as const;
export const setUsersAC = (users: User[]) => ({type: SET_USERS, payload: {users}}) as const;
export const setCurrentPageAC = (pageNumber:number) => ({type: SET_CURRENT_PAGE, payload: {pageNumber}}) as const;
export const setTotalUsersCountAC = (totalUsersCount:number) => ({type: SET_TOTAL_USERS_COUNT, payload: {totalUsersCount}}) as const;
