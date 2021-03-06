import {profileAPI} from '../API/ProfileAPI';
import {Dispatch} from 'redux';

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

let initialState: ProfilePageReducerType = {
    posts: [
        {id: 1, message: 'Hi,how are you?', likeCount: 4},
        {id: 2, message: 'Its my first post?', likeCount: 11}
    ],
    newPostText: '',
    profile: null,
    status: ''
};

export const profileReducer = (state: ProfilePageReducerType = initialState, action: ProfilePageACType): ProfilePageReducerType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {id: 5, message: action.post, likeCount: 0};
            return {
                ...state,
                posts: [newPost, ...state.posts],
            };
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.payload.profile
            };

        }
        case SET_USER_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        default: {
            return state;
        }
    }
};
//AC
export const addPost = (post: string) => ({type: ADD_POST, post}) as const;
export const setUserProfile = (profile: any) => ({
    type: SET_USER_PROFILE,
    payload: {profile}
}) as const;

export const setUserStatus = (status: string) => ({
    type: SET_USER_STATUS,
    status
} as const);

//TC
export const setProfile = (userId: string) => {
    return (dispatch: Dispatch<ProfilePageACType>) => {
        profileAPI.getUserProfile(userId)
            .then(res => {
                dispatch(setUserProfile(res.data));
            });
    };
};
export const getUserStatusTC = (userId: string) => {
    return (dispatch: Dispatch<ProfilePageACType>) => {
        profileAPI.getUserStatus(userId)
            .then(res => {
                dispatch(setUserStatus(res.data));
            });
    };
};

export const updateUserStatusTC = (status: string) => {
    return (dispatch: Dispatch<ProfilePageACType>) => {
        profileAPI.updateUserStatus(status)
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(setUserStatus(status));
                }
            });
    };
};

export type ProfilePageACType =
    | ReturnType<typeof addPost>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setUserStatus>


export type PostType = {
    id: number
    message: string
    likeCount: number
}


export type ProfilePageReducerType = {
    posts: PostType[]
    newPostText: string
    profile: ProfileType | null
    status: string
}


export type Contacts = {
    facebook: string;
    website?: string;
    vk: string;
    twitter: string;
    instagram: string;
    youtube?: string;
    github: string;
    mainLink?: string;
}

export type Photos = {
    small: string;
    large: string;
}

export type ProfileType = {
    aboutMe: string;
    contacts: Contacts;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    fullName: string;
    userId: number;
    photos: Photos;
}

