import React from 'react';
import {NavLink} from 'react-router-dom';
import c from './HeaderMenu.module.css';

export const HeaderMenu = () => {
    const customActiveClassName = (navData: any) => navData.isActive
        ? c.active + ' ' + c.navBoxItem
        : c.navBoxItem;
    return (
        <div className={c.navlinkBox}>
            <ul className={c.navBox}>
                <li><NavLink className={customActiveClassName}
                             to="/profile">Profile</NavLink></li>
                <li><NavLink className={customActiveClassName}
                             to="/message">Massages</NavLink></li>
                <li><NavLink className={customActiveClassName} to="/users">Users</NavLink>
                </li>
                <li><NavLink className={customActiveClassName} to="/news">News</NavLink>
                </li>
                <li><NavLink className={customActiveClassName} to="/music">Music</NavLink>
                </li>
                <li><NavLink className={customActiveClassName}
                             to="/settings">Settings</NavLink></li>
            </ul>

        </div>
    );
};

