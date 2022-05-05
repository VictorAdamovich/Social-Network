import React from 'react';
import c from './Post.module.css'


type MyPostsType = {
    id:number
    massage: string
    likeCount: number
}

const Post = (props: MyPostsType) => {
    return (
        <div className={c.item}>
            <img
                src="http://sun9-81.userapi.com/s/v1/ig2/yfW2G2UjBNtgoykFhPdastdMpOjsVweYGmeYYWO3jWaQfy0hd1CGdEl-ke7JZ9LXhwClrQ7R6_juWk_VgITWQKpd.jpg?size=604x604&quality=96&type=album"
                alt=""/>
            {props.massage}
            <div>
                <span>Like {props.likeCount}</span>
            </div>
        </div>
    );
};

export default Post;