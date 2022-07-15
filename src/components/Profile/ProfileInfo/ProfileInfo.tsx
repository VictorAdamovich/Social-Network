import c from './ProfileInfo.module.css';
import React from 'react';
import {Preloader} from '../../common/Preloader/Preloader';
import {ProfileStatus} from './ProfileStatus';
import baseIMG from '../../../assets/images/user.jpg';
import {useAppSelector} from '../../../redux/store';


export const ProfileInfo = () => {
    const profile = useAppSelector(state => state.profilePage.profile);

    if (!profile) {
        return <Preloader/>;
    }

    return <div>
        <div className={c.content}>
            <div className={c.profile}>
                <div>
                    <h2>{profile.fullName}</h2>
                    <ProfileStatus/>
                </div>

                <img
                    src={profile.photos.large || baseIMG}
                    alt="userPhoto"/>
            </div>
        </div>

    </div>;

};