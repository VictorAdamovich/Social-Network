import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = () => {
    const customActiveClassName = (navData:any) =>  navData.isActive ? s.active : s.item;



    return (
        <nav className={s.nav}>
            <div >
                <NavLink to="/profile" className={customActiveClassName}>Profile</NavLink>
            </div>
            <div>
                <NavLink to="/dialog" className={customActiveClassName}>Dialogs</NavLink>
            </div>
            <div>
                <NavLink to="/massages" className={customActiveClassName}>Massages</NavLink>
            </div>
            <div>
                <NavLink to="/news" className={customActiveClassName}>News</NavLink>
            </div>
            <div>
                <NavLink to="/music" className={customActiveClassName}>Music</NavLink>
            </div>
            <div >
                <NavLink to="/settings" className={customActiveClassName}>Settings</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;