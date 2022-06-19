import React, {useRef} from 'react';
import Post from './Post/Post';
import c from './MyPosts.module.css';
import {Button} from '@mui/material';
import {Send} from '@mui/icons-material';
import {PostType} from '../../../../redux/profile-reducer';


type MyPostType = {
    posts: PostType[]
    newPostText: string
    addPost: () => void
    updateNewPostText: (text: string) => void
}


const MyPosts = (props: MyPostType) => {
    let dialogsElements = props.posts.map((d: PostType) =>
        <Post
            key={d.id}
            id={d.id}
            massage={d.message}
            likeCount={d.likeCount}
        />);

    let newPostEl = useRef<HTMLTextAreaElement>(null);

    const onAddPost = () => props.addPost();
    const onPostChange = () => newPostEl.current !== null && props.updateNewPostText(newPostEl.current.value);


    return (
        <div className={c.box}>
            <h3>My posts</h3>
            <textarea ref={newPostEl} value={props.newPostText} onChange={onPostChange}/>

            <div>
                <Button onClick={onAddPost} variant="contained" endIcon={<Send/>}>
                    Send
                </Button>

            </div>
            <div className={c.posts}>
                {dialogsElements}
            </div>
        </div>
    );
};
export default MyPosts;