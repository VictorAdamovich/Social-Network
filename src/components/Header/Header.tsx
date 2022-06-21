import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';


type HeaderPropsType = {
    isAuth?: boolean
    login?: string
}


const Header = (props: any) => {
    debugger
    return (
        <header className={s.header}>
            <div className={s.header_logo}>
                <img
                    src="https://static.tildacdn.com/tild6238-3535-4331-b232-346335383032/React.png"
                    alt="ReactLogo"/>
            </div>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? props.login
                    : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    );
};

export default Header;