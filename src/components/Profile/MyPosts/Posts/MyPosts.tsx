import React from 'react';
import Post from './Post/Post'
import c from './MyPosts.module.css'



const MyPosts = () => {

    let postData = [
        {id: 1, massage: 'Hi,how are you?', likeCount: 4},
        {id: 2, massage: 'Its my first post?', likeCount: 11}
    ]


    let dialogsElements = postData.map(d =>
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