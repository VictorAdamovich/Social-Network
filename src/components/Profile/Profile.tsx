import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import c from './Profile.module.css';
import {ProfileType} from '../../redux/profile-reducer';
import {MyPosts} from './MyPosts/Posts/MyPosts';

type ProfilePropsType = {
    profile: ProfileType | null
    status: string
    updateUserStatus: (status: string) => void
}


const Profile = (props: ProfilePropsType) => {
    return (
        <div className={c.content}>
            <ProfileInfo
                profile={props.profile}
                status={props.status}
                updateUserStatus={props.updateUserStatus}
            />
            <MyPosts/>
        </div>
    );
};

export default Profile;