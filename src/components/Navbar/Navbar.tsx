import React from 'react';
import c from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={c.nav}>
            <div className={c.item}>
                <a href="/profile">Profile</a>
            </div>
            <div className={c.item}>
                <a href="/dialog">Dialogs</a>
            </div>
            <div className={c.item}>
                <a href="/massages">Massages</a>
            </div>
            <div className={c.item}>
                <a href="/news">News</a>
            </div>
            <div className={c.item}>
                <a href="/music">Music</a>
            </div>
            <div className={c.item}>
                <a href="/settings">Settings</a>
            </div>
        </nav>
    );
};

export default Navbar;