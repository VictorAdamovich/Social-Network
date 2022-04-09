import React from 'react';
import c from './Profile.module.css';
import MyPosts from "./MyPosts/Posts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div className="{c.content}"><img
                src="https://media.cntraveler.com/photos/5eb18e42fc043ed5d9779733/16:9/w_2580,c_limit/BlackForest-Germany-GettyImages-147180370.jpg"
                alt=""/>
            </div>
            <div className={c.item}>ava+dicription</div>
            <MyPosts/>

        </div>
    );
};

export default Profile;