import React from 'react';
import {addPostAC, updateNewPostTextAC} from '../../../../redux/profile-reducer';
import MyPosts from './MyPosts';


type MyPostType = {
    store: any
}


export const MyPostsContainer = (props: MyPostType) => {
    let state = props.store.getState()

    const addPost = () => props.store.dispatch(addPostAC());
    const onPostChange = (text: string) => props.store.dispatch(updateNewPostTextAC(text));

    return (
        <MyPosts
            addPost={addPost}
            onPostChange={onPostChange}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
        />
    );
};
