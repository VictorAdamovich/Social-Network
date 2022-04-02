import React from 'react';
import c from './Post.module.css'


type MypostsType = {
    massage: string
    likeCount:Number
}

const Post = (props: MypostsType) => {
    return (
        <div className={c.item}>
            <img
                src="https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg"
                alt=""/>
            {props.massage}
            <div>
                <span>Like {props.likeCount}</span>
            </div>
        </div>
    );
};

export default Post;