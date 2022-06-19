import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navbar.module.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import ArticleIcon from '@mui/icons-material/Article';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import SettingsIcon from '@mui/icons-material/Settings';

const Navbar = () => {
    const customActiveClassName = (navData: any) => navData.isActive ? s.active + ' ' + s.item : s.item;
    return (

        <div className={s.Navbar}>
            <h3><AccountCircleIcon/>
                <NavLink to="/profile" className={customActiveClassName}>Profile</NavLink></h3>
            <h3><MailOutlineIcon/>
                <NavLink to="/message" className={customActiveClassName}>Massages</NavLink></h3>
            <h3>
                <SupervisedUserCircleIcon/>
                <NavLink to="/users" className={customActiveClassName}>Users</NavLink></h3>
            <h3>
                <ArticleIcon/>
                <NavLink to="/news" className={customActiveClassName}>News</NavLink></h3>
            <h3>
                <QueueMusicIcon/>
                <NavLink to="/music" className={customActiveClassName}>Music</NavLink></h3>
            <h3>
                <SettingsIcon/>
                <NavLink to="/settings" className={customActiveClassName}>Settings</NavLink></h3>
        </div>

    );
};


export default Navbar;
