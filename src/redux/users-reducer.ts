const TOGGLE_FOLLOW = 'TOGGLE-FOLLOW';
const SET_USERS = 'SET-USERS';

export type UserReducerType = {
    users: UserType[]
}

export type UserType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: UserLocationType
}

type UserLocationType = {
    city: string
    country: string
}

type UsersACType =
    ReturnType<typeof followToggleAC>
    | ReturnType<typeof setUsersAC>

const initialState: UserReducerType = {
    users: [
        {
            id: 1,
            photoUrl: 'https://www.blast.hk/attachments/64805/',
            followed: false,
            fullName: 'Victor',
            status: 'I am a boss',
            location: {city: 'Minsk', country: 'belarus'}
        },
        {
            id: 2,
            photoUrl: 'https://www.blast.hk/attachments/64805/',
            followed: false,
            fullName: 'Alex',
            status: 'I am a boss',
            location: {city: 'Minsk', country: 'belarus'}
        },
        {
            id: 3,
            photoUrl: 'https://www.blast.hk/attachments/64805/',
            followed: false,
            fullName: 'Max',
            status: 'I am a boss',
            location: {city: 'Minsk', country: 'belarus'}
        }
    ]
};

export const usersReducer = (state: UserReducerType = initialState, action: UsersACType): UserReducerType => {
    switch (action.type) {
        case TOGGLE_FOLLOW: {
            return {
                ...state,
                users: state.users.map((u: UserType) => u.id === action.payload.userID ? {
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
export const setUsersAC = (users: UserType[]) => ({type: SET_USERS, payload: {users}}) as const;
