import React from 'react';
import Post from './Post/Post'
import c from './MyPosts.module.css'

const MyPosts = () => {
    return (
        <div>
            <textarea></textarea>
            <button>Add post</button>
            <button>Remove</button>
            <div className={c.posts}>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    );
}
export default MyPosts;