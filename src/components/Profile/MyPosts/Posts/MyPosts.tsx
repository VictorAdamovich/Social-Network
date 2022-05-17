import React, {useRef} from 'react';
import Post from './Post/Post'
import c from './MyPosts.module.css'
import {addPostAC, updateNewPostTextAC} from "../../../../redux/state";
import {Button, TextField} from "@mui/material";
import {Send} from "@mui/icons-material";



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
                {/*<button onClick={addPost}>Send</button>*/}
                <Button onClick={addPost} variant="contained" endIcon={<Send />}>
                    Send
                </Button>

            </div>
            <div className={c.posts}>
                {dialogsElements}
            </div>
        </div>
    );
}
export default MyPosts;