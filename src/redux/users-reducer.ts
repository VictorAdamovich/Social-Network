const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW-FOLLOW';
const SET_USERS = 'SET_USERS-USERS';
const SET_CURRENT_PAGE = 'SET-SET_CURRENT_PAGE-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

export type UserReducerType = {
    users: User[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
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

const initialState: UserReducerType = {
    users: [],
    pageSize: 100,
    totalUsersCount: 21,
    currentPage: 1,
    isFetching: true
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
        default: {
            return state;
        }
    }
};


type UsersACType = ReturnType<typeof setFollowToggle>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof setFetching>


export const setFollowToggle = (userID: number) => ({type: TOGGLE_FOLLOW, payload: {userID}}) as const;
export const setUsers = (users: User[]) => ({type: SET_USERS, payload: {users}}) as const;
export const setCurrentPage = (pageNumber: number) => ({type: SET_CURRENT_PAGE, payload: {pageNumber}}) as const;
export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: SET_TOTAL_USERS_COUNT,
    payload: {totalUsersCount}
}) as const;
export const setFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, payload: {isFetching}}) as const;
