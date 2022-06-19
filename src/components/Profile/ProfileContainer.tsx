import React, {useEffect} from 'react';
import c from './Profile.module.css';
import Profile from './Profile';
import axios from 'axios';
import {GetUsersResponse} from '../../redux/users-reducer';
import {connect} from 'react-redux';
import {ProfileType, setUserProfile} from '../../redux/profile-reducer';
import {RootReduxType} from '../../redux/redux-store';
import {useParams} from 'react-router-dom';

type MapStateToPropsType = {
    profile: ProfileType | null
}

type MapDispatchToPropsType = {
    setUserProfile: (profile: any) => void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType


const ProfileContainer = (props: PropsType) => {
    useEffect(() => {
        if(userId===undefined){
            userId='2'
        }
        axios.get<GetUsersResponse>(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                props.setUserProfile(response.data);
            });
    }, []);

    let {userId} = useParams<string>();

    return (
        <div className={c.content}>
            <Profile
                {...props}
                profile={props.profile}
            />
        </div>
    );
};


let mapStateToProps = (state: RootReduxType): MapStateToPropsType => ({
    profile: state.profilePage.profile
});

export default connect(mapStateToProps, {
    setUserProfile
})(ProfileContainer);