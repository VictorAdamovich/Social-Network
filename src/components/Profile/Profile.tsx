import React, {useEffect} from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import c from './Profile.module.css';
import {getUserStatusTC, setProfile} from '../../redux/profile-reducer';
import {MyPosts} from './MyPosts/Posts/MyPosts';
import {useParams} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {useAppSelector} from '../../redux/store';
import {CircularProgress} from '@mui/material';

const Profile = () => {
    const dispatch: any = useDispatch();
    const setProfileHandle = (userId: string) => dispatch(setProfile(userId));
    const getUserStatusHande = (userId: string) => dispatch(getUserStatusTC(userId));
    const profile = useAppSelector(state => state.profilePage.profile);

    let {userId} = useParams<string>();

    useEffect(() => {
        if (userId === undefined) {
            userId = '24020';
        }
        setProfileHandle(userId);
        getUserStatusHande(userId);
    }, []);

    if (!profile) {
        return <div
            style={{position: 'fixed', top: '30%', textAlign: 'center', width: '100%'}}>
            <CircularProgress/>
        </div>;
    }

    return (
        <div className={c.content}>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    );
};

export default Profile;