import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navbar.module.css';
import {Stack} from "@mui/material";

const Navbar = (props: any) => {
    const customActiveClassName = (navData: any) => navData.isActive ? s.active + ' ' + s.item : s.item;

    return (

        <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={2}
            >
            <NavLink to="/profile" className={customActiveClassName}>Profile</NavLink>
            <NavLink to="/message" className={customActiveClassName}>Massages</NavLink>
            <NavLink to="/news" className={customActiveClassName}>News</NavLink>
            <NavLink to="/music" className={customActiveClassName}>Music</NavLink>
            <NavLink to="/settings" className={customActiveClassName}>Settings</NavLink>
        </Stack>

    );
};


export default Navbar;