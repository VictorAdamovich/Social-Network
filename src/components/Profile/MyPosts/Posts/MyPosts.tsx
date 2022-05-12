import React, {useRef} from 'react';
import Post from './Post/Post'
import c from './MyPosts.module.css'
import {addPostAC, updateNewPostTextAC} from "../../../../redux/state";



const MyPosts = (props: any) => {
    let dialogsElements = props.state.posts.map((d: any) =>
        <Post
            id={d.id}
            massage={d.message}
            likeCount={d.likeCount}
        />)

    let newPostEl = useRef<HTMLTextAreaElement>(null)

    const addPost = () => props.dispatch(addPostAC())
    const onPostChange = () => newPostEl.current !== null && props.dispatch(updateNewPostTextAC(newPostEl.current.value))


    return (
        <div className={c.box}>
            <h3>My posts</h3>
            <textarea ref={newPostEl} value={props.state.newPostText} onChange={onPostChange}/>
            <div>
                <button onClick={addPost}>Send</button>

            </div>
            <div className={c.posts}>
                {dialogsElements}
            </div>
        </div>
    );
}
export default MyPosts;