import React from 'react';
import MyPosts, {MyPostStateType} from "./MyPosts/Posts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {addPost, updateNewPostText} from "../../redux/state";

type ProfilePropsType={
    addPost: () => void
    updateNewPostText:(newText:string)=>void
    profilePage:MyPostStateType
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts state={props.profilePage} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </div>
    );
};

export default Profile;