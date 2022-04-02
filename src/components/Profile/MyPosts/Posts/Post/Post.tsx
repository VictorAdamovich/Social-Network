import React from 'react';
import c from './Post.module.css'

const Post = () => {
    return (
        <div className={c.item}>
            <img
                src="https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg"
                alt=""/>
            Post1
            <div>
                <span>Like</span>
            </div>
        </div>
    );
};

export default Post;