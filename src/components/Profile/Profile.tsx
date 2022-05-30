import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import c from "./Profile.module.css";
import {MyPostsContainer} from './MyPosts/Posts/MyPostsContainer';


const Profile = () => {
    return (
        <div className={c.content}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;