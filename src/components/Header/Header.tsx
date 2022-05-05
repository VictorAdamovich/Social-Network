import React from 'react';
import c from './Header.module.css';

const Header = () => {
    return (
        <header className={c.header}>
            <div className={c.header_logo}>
                <img
                    src="https://edu.softline.by/upload/catalog/small/1606726858_react_logo_wordmark.png"
                    alt="ps"/>
            </div>
        </header>
    );
};

export default Header;