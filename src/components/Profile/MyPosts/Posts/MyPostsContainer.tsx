import React from 'react';
import {addPost, PostType, updateNewPostText} from '../../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {RootReduxType} from '../../../../redux/redux-store';


type MapStateToPropsType = {
    posts: PostType[]
    newPostText: string
}

const mapStateToProps = (state: RootReduxType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText

    };
};

export const MyPostsContainer = connect(mapStateToProps, {
    addPost,
    updateNewPostText
})(MyPosts);