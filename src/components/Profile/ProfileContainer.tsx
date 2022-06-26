import React, {useEffect} from 'react';
import c from './Profile.module.css';
import Profile from './Profile';
import {connect} from 'react-redux';
import {ProfileType, setProfile} from '../../redux/profile-reducer';
import {RootReduxType} from '../../redux/redux-store';
import {Navigate, useParams} from 'react-router-dom';

type MapStateToPropsType = {
    profile: ProfileType | null
    isAuth: boolean | undefined
}

type MapDispatchToPropsType = {
    setProfile: any
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType


const ProfileContainer = (props: PropsType) => {
    useEffect(() => {
        if (userId === undefined) {
            userId = '2';
        }
        props.setProfile(userId);
    }, []);

    let {userId} = useParams<string>();

    if (props.isAuth==false) return <Navigate to="/login"/>;
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
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {
    setProfile
})(ProfileContainer);