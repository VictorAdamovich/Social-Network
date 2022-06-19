import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.header_logo}>
                <img
                    src="https://static.tildacdn.com/tild6238-3535-4331-b232-346335383032/React.png"
                    alt="ReactLogo"/>
            </div>
        </header>
    );
};

export default Header;