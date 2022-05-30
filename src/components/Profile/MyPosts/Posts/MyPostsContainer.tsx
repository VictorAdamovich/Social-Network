import React from 'react';
import {Dispatch} from 'redux';
import {addPostAC, PostType, updateNewPostTextAC} from '../../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {RootReduxType} from '../../../../redux/redux-store';


type MapStateToPropsType={
    posts:PostType[]
    newPostText:string
}


type mapDispatchToProps = {
    addPost: () => void
    onPostChange: (text: string) => void
}


const mapStateToProps = (state: RootReduxType):MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText

    };
};
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToProps => {
    return {
        addPost: () => dispatch(addPostAC()),
        onPostChange: (text: string) => dispatch(updateNewPostTextAC(text))
    };
};

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);