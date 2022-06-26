import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import c from './Profile.module.css';
import {MyPostsContainer} from './MyPosts/Posts/MyPostsContainer';
import {ProfileType} from '../../redux/profile-reducer';

type ProfilePropsType = {
    profile: ProfileType | null
}


const Profile = (props: ProfilePropsType) => {


    return (
        <div className={c.content}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;