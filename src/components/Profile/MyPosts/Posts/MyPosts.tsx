import React, {useRef} from 'react';
import Post from './Post/Post'
import c from './MyPosts.module.css'


export type postsType = {
    state: Array<postType>
    addPost:(postMessage:string)=> void
}

export type postType = {
    id: number
    message: string
    likeCount: number
}


const MyPosts = (props: postsType) => {
    let dialogsElements = props.state.map((d: postType) =>
        <Post
            id={d.id}
            massage={d.message}
            likeCount={d.likeCount}
        />)

    let newPostEl = useRef<HTMLTextAreaElement>(null)

    const addPost = () => {
        if (newPostEl.current !== null) {
            props.addPost(newPostEl.current.value)
            newPostEl.current.value=''
        }
    }


    return (
        <div className={c.box}>
            <h3>My posts</h3>
            <textarea ref={newPostEl}
            ></textarea>
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