import React from 'react';
import MyPosts from "./MyPosts/Posts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import c from "./Profile.module.css";
import {ActionsType} from '../../redux/redux-store';
import {ProfilePageType} from '../../redux/profile-reducer';

type ProfilePropsType={
    state: ProfilePageType
    dispatch:(action: ActionsType) => void
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div className={c.content}>
            <ProfileInfo/>
            <MyPosts state={props.state} dispatch={props.dispatch}/>
        </div>
    );
};

export default Profile;