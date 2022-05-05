import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navbar.module.css';
import {Frends} from "./Frends/Frends";

const Navbar = (props:any) => {
    const customActiveClassName = (navData: any) => navData.isActive ? s.active +' '+ s.item: s.item;

    return (
        <nav className={s.nav}>
            <div>
                <NavLink to="/profile" className={customActiveClassName}>Profile</NavLink>
            </div>
            <div>
                <NavLink to="/message" className={customActiveClassName}>Massages</NavLink>
            </div>
            <div>
                <NavLink to="/news" className={customActiveClassName}>News</NavLink>
            </div>
            <div>
                <NavLink to="/music" className={customActiveClassName}>Music</NavLink>
            </div>
            <div>
                <NavLink to="/settings" className={customActiveClassName}>Settings</NavLink>
            </div>
            <Frends state={props.state}/>
        </nav>
    );
};


export default Navbar;