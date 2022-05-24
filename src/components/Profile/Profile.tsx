import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import c from "./Profile.module.css";
import {ActionsType} from '../../redux/redux-store';
import {ProfilePageType} from '../../redux/profile-reducer';
import {MyPostsContainer} from './MyPosts/Posts/MyPostsContainer';

type ProfilePropsType={
    store:any
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div className={c.content}>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </div>
    );
};

export default Profile;