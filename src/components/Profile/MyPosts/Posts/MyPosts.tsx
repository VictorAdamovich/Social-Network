import React, {useRef} from 'react';
import Post from './Post/Post'
import c from './MyPosts.module.css'


export type MyPostPropsType = {
    addPost: () => void
    updateNewPostText: (newText: string) => void
    state: MyPostStateType
}

export type MyPostStateType = {
    newPostText: string
    posts: MyPostType[]
}


type MyPostType = {
    id: number
    message: string
    likeCount: number
}


const MyPosts = (props: MyPostPropsType) => {
    let dialogsElements = props.state.posts.map((d: MyPostType) =>
        <Post
            id={d.id}
            massage={d.message}
            likeCount={d.likeCount}
        />)

    let newPostEl = useRef<HTMLTextAreaElement>(null)

    const addPost = () => props.addPost()

    const onPostChange = () => {
        if (newPostEl.current !== null) {
            props.updateNewPostText(newPostEl.current.value)
        }
    }

    //

    return (
        <div className={c.box}>
            <h3>My posts</h3>
            <textarea ref={newPostEl} value={props.state.newPostText} onChange={onPostChange}/>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={c.posts}>
                {dialogsElements}
            </div>
        </div>
    );
}
export default MyPosts;