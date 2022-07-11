import React, {useEffect} from 'react';
import c from './Profile.module.css';
import Profile from './Profile';
import {connect} from 'react-redux';
import {
    getUserStatusTC,
    ProfileType,
    setProfile,
    updateUserStatusTC
} from '../../redux/profile-reducer';
import {RootReduxType} from '../../redux/store';
import {useParams} from 'react-router-dom';


const ProfileContainer = (props: PropsType) => {
    useEffect(() => {
        if (userId === undefined) {
            userId = '24020';
        }
        props.setProfile(userId);
        props.getUserStatusTC(userId);
    }, []);

    let {userId} = useParams<string>();

    return (
        <div className={c.content}>
            <Profile
                {...props}
                profile={props.profile}
                status={props.status}
                updateUserStatus={props.updateUserStatusTC}
            />
        </div>
    );
};

let mapStateToProps = (state: RootReduxType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});

export default connect(mapStateToProps, {
    setProfile,
    getUserStatusTC,
    updateUserStatusTC
})(ProfileContainer);

type MapStateToPropsType = {
    profile: ProfileType | null
    status: string
}

type MapDispatchToPropsType = {
    setProfile: (userId: string) => void
    getUserStatusTC: (userId: string) => void
    updateUserStatusTC: (status: string) => void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType