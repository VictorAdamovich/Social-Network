const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export type ProfilePageACType =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>


export type PostType = {
    id: number
    message: string
    likeCount: number
}


export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
}

let initialState = {
    posts: [
        {id: 1, message: 'Hi,how are you?', likeCount: 4},
        {id: 2, message: 'Its my first post?', likeCount: 11}
    ],
    newPostText: ''
};


export const profileReducer = (state: ProfilePageType = initialState, action: ProfilePageACType): ProfilePageType => {
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
        default: {
            return state;
        }
    }
};


export const addPostAC = () => ({type: ADD_POST} as const);

export const updateNewPostTextAC = (text: string) => {
    return {type: UPDATE_NEW_POST_TEXT, payload: {text}} as const;
};


