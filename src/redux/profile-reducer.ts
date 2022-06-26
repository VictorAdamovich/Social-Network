import {profileAPI} from '../API/ProfileAPI';
import axios from 'axios';
import {GetUsersResponse} from './users-reducer';

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

export type ProfilePageACType =
    | ReturnType<typeof addPost>
    | ReturnType<typeof updateNewPostText>
    | ReturnType<typeof setUserProfile>


export type PostType = {
    id: number
    message: string
    likeCount: number
}


export type ProfilePageReducerType = {
    posts: PostType[]
    newPostText: string
    profile: ProfileType | null
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


let initialState = {
    posts: [
        {id: 1, message: 'Hi,how are you?', likeCount: 4},
        {id: 2, message: 'Its my first post?', likeCount: 11}
    ],
    newPostText: '',
    profile: null
};

export const profileReducer = (state: ProfilePageReducerType = initialState, action: ProfilePageACType): ProfilePageReducerType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {id: 5, message: state.newPostText, likeCount: 0};
            return {
                ...state,
                posts: [newPost, ...state.posts],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.payload.text
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.payload.profile
            };

        }
        default: {
            return state;
        }
    }
};

export const addPost = () => ({type: ADD_POST}) as const;
export const updateNewPostText = (text: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    payload: {text}
}) as const;
export const setUserProfile = (profile: any) => ({
    type: SET_USER_PROFILE,
    payload: {profile}
}) as const;


export const setProfile = (userId: string) => {
    return (dispatch: any) => {
        profileAPI.setUserProfile(userId)
            .then(res => {
                console.dir(res);
                dispatch(setUserProfile(res.data));
            })
    };
};