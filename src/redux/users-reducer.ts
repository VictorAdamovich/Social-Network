import {User} from '../components/Users/Users';

const TOGGLE_FOLLOW = 'TOGGLE-FOLLOW';
const SET_USERS = 'SET-USERS';

export type UserReducerType = {
    users: User[]
}

// export type UserType = {
//     id: number
//     photoUrl: string
//     followed: boolean
//     fullName: string
//     status: string
//     location: UserLocationType
// }

type UserLocationType = {
    city: string
    country: string
}

type UsersACType =
    ReturnType<typeof followToggleAC>
    | ReturnType<typeof setUsersAC>

const initialState: UserReducerType = {
    users: []
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
                users: [...state.users, ...action.payload.users]
            };
        }
        default: {
            return state;
        }
    }
};


export const followToggleAC = (userID: number) => ({type: TOGGLE_FOLLOW, payload: {userID}}) as const;
export const setUsersAC = (users: User[]) => ({type: SET_USERS, payload: {users}}) as const;
