import React from 'react';
import Post from './Post/Post'
import c from './MyPosts.module.css'



const MyPosts = (props:any) => {
    let dialogsElements = props.postData.map((d: { id: number; massage: string; likeCount: number; }) =>
        <Post
            id={d.id}
            massage={d.massage}
            likeCount={d.likeCount}
        />)


    return (
        <div className={c.box}>
            <h3>My posts</h3>
            <textarea></textarea>
            <div>
                <button>Add post</button>
            </div>
            <div className={c.posts}>
                {dialogsElements}
            </div>
        </div>
    );
}
export default MyPosts;