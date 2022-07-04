import c from './ProfileInfo.module.css';
import React from 'react';
import {ProfileType} from '../../../redux/profile-reducer';
import {Preloader} from '../../common/Preloader/Preloader';
import {ProfileStatus} from './ProfileStatus';

type ProfileInfoType = {
    profile: ProfileType | null
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
                        <ProfileStatus status={'Hello'}/>
                    </div>

                    <img
                        src={props.profile.photos.large}
                        alt="userPhoto"/>
                </div>
            </div>

        </div>;
    }
};