import React from 'react';
import MyPosts from "./MyPosts/Posts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";


const Profile = (props:any) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={props.postData}/>
        </div>
    );
};

export default Profile;