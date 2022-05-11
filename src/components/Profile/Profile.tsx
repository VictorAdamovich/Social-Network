import React from 'react';
import MyPosts from "./MyPosts/Posts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import c from "./Profile.module.css";

const Profile = (props: any) => {
    return (
        <div className={c.content}>
            <ProfileInfo/>
            <MyPosts state={props.profilePage} dispatch={props.dispatch}/>
        </div>
    );
};

export default Profile;