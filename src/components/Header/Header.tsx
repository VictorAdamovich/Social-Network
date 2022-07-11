import React, {useCallback, useEffect} from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {RootReduxType} from '../../redux/store';
import {getAuth, logoutTS} from '../../redux/auth-reducer';
import {HeaderMenu} from './HeaderMenu/HeaderMenu';


export const Header = (props: HeaderPropsType) => {
    const dispatch = useDispatch<any>();
    const logoutHandle=useCallback(()=>dispatch(logoutTS()),[])
    const userIsAuth = useSelector((state: RootReduxType) => state.auth.isAuth);
    const userLogin = useSelector((state: RootReduxType) => state.auth.login);


    useEffect(() => {
        dispatch(getAuth());
    }, []);

    return (
        <header className={s.header}>
            <>
                <HeaderMenu/>
            </>
            <div className={s.loginBlock}>
                {userIsAuth
                    ?
                    <div className={s.login_box}>
                        <NavLink className={s.login} to={'/profile'}>{userLogin}</NavLink>
                        <p onClick={logoutHandle} className={s.login}>Logout</p>
                    </div>
                    :
                    <NavLink className={s.login} to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    );
};

type HeaderPropsType = {}

