const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


export const profileReducer = (state: any, action: any) => {
    switch (action.type) {
        case ADD_POST:
            debugger
            let newPost = {id: 5, message: state.newPostText, likeCount: 0};
            state.posts.unshift(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
    return state;
};

