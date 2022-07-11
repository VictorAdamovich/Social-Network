import React, {useEffect} from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import c from './Profile.module.css';
import {getUserStatusTC, setProfile} from '../../redux/profile-reducer';
import {MyPosts} from './MyPosts/Posts/MyPosts';
import {useParams} from 'react-router-dom';
import {useDispatch} from 'react-redux';

const Profile = () => {
    const dispatch: any = useDispatch();
    const setProfileHandle = (userId: string) => dispatch(setProfile(userId));
    const getUserStatusHande = (userId: string) => dispatch(getUserStatusTC(userId));

    let {userId} = useParams<string>();

    useEffect(() => {
        if (userId === undefined) {
            userId = '24020';
        }
        setProfileHandle(userId);
        getUserStatusHande(userId);
    }, []);

    return (
        <div className={c.content}>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    );
};

export default Profile;