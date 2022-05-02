import React from 'react';
import MyPosts, {postsType} from "./MyPosts/Posts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {addPost} from "../../redux/state";


const Profile = (props: postsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts state={props.state} addPost={addPost}/>
        </div>
    );
};

export default Profile;