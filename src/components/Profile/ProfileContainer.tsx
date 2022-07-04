import React, {useEffect} from 'react';
import c from './Profile.module.css';
import Profile from './Profile';
import {connect} from 'react-redux';
import {ProfileType, setProfile} from '../../redux/profile-reducer';
import {RootReduxType} from '../../redux/redux-store';
import {useParams} from 'react-router-dom';
import {WithAuthRedirect} from '../../HOCs/WithAuthRedirect';

type MapStateToPropsType = {
    profile: ProfileType | null
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
});

let ProfileAuthRedirectComponent = WithAuthRedirect(ProfileContainer);

export default connect(mapStateToProps, {
    setProfile
})(ProfileAuthRedirectComponent);