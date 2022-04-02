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
                <Post massage ='Hi,how are you?' likeCount={1} />
                <Post massage = "Its my first post" likeCount={2}/>
            </div>
        </div>
    );
}
export default MyPosts;