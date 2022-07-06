import c from './ProfileInfo.module.css';
import React from 'react';
import {ProfileType} from '../../../redux/profile-reducer';
import {Preloader} from '../../common/Preloader/Preloader';
import {ProfileStatus} from './ProfileStatus';
import baseIMG from '../../../assets/images/user.png'

type ProfileInfoType = {
    profile: ProfileType | null
    status:string
    updateUserStatus:(status:string)=>void
}

export const ProfileInfo = (props: ProfileInfoType) => {
    if (!props.profile) {
        return <Preloader/>;
    } else {
        return <div>
            <div className={c.content}>
                <div className={c.profile}>
                    <div>
                        <h2>{props.profile.fullName}</h2>
                        <ProfileStatus
                            status={props.status}
                            updateUserStatus={props.updateUserStatus}
                        />
                    </div>

                    <img
                        src={props.profile.photos.large || baseIMG}
                        alt="userPhoto"/>
                </div>
            </div>

        </div>;
    }
};