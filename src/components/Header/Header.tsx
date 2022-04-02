import React from 'react';
import c from './Header.module.css';

const Header = () => {
    return (
        <header className={c.header}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Playstation_logo_colour.svg/2560px-Playstation_logo_colour.svg.png"
                alt="ps"/>
        </header>
    );
};

export default Header;