import React, {useRef} from 'react';
import Post from './Post/Post'
import c from './MyPosts.module.css'
import {Button} from "@mui/material";
import {Send} from "@mui/icons-material";
import {addPostAC, PostType, ProfilePageType, updateNewPostTextAC} from '../../../../redux/profile-reducer';
import {ActionsType} from '../../../../redux/redux-store';


type MyPostType={
    state: ProfilePageType
    dispatch:(action: ActionsType) => void
}


const MyPosts = (props: MyPostType) => {
    debugger;
    let dialogsElements = props.state.posts.map((d: PostType) =>
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