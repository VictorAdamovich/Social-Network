import React from 'react';
import MyPosts, {MyPostStateType} from "./MyPosts/Posts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import c from "./Profile.module.css";

type ProfilePropsType={
    addPost: () => void
    updateNewPostText:(newText:string)=>void
    profilePage:MyPostStateType
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div className={c.content}>
            <ProfileInfo/>
            <MyPosts state={props.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
        </div>
    );
};

export default Profile;