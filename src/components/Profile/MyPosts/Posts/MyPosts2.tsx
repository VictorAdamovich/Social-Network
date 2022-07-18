import React from 'react';
import Post from './Post/Post';
import c from './MyPosts.module.css';
import {PostType} from '../../../../redux/profile-reducer';
import {AddPostForm} from './Post/AddPostForm';
import {useAppSelector} from '../../../../redux/store';


export const MyPosts = () => {
    const posts=useAppSelector((state)=> state.profilePage.posts)

    let postElements = posts.map((d: PostType) =>
        <Post
            key={d.id}
            id={d.id}
            massage={d.message}
            likeCount={d.likeCount}
        />);

    return (
        <div className={c.box}>
            <h3>My posts</h3>
            <AddPostForm/>
            <div className={c.posts}>
                {postElements}
            </div>
        </div>
    );
};
