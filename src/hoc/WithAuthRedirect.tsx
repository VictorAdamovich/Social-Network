import {Navigate} from 'react-router-dom';
import React from 'react';
import {RootReduxType} from '../redux/store';
import { connect } from 'react-redux';


let mapStateToPropsForRedirect=(state:RootReduxType)=>({
    isAuth:state.auth.isAuth
})

export const WithAuthRedirect = (Component: any) => {

    let RedirectComponent = (props: any) => {
        if (!props.isAuth) return <Navigate to="/login"/>;
        return <Component{...props}/>;
    };


    let ConnetctedAuthRedirectComponent=connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnetctedAuthRedirectComponent;
};

