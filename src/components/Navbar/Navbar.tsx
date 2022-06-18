import {Stack} from '@mui/material';
import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navbar.module.css';
import {styled} from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width:'100px',
    padding:'10px',
    margin:'5px'
}));


const Navbar = () => {
    const customActiveClassName = (navData: any) => navData.isActive ? s.active + ' ' + s.item : s.item;
    return (

        <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
            spacing={2}
        >
            <Item>
                <NavLink to="/profile" className={customActiveClassName}>Profile</NavLink>
            </Item>
            <Item>
                <NavLink to="/message" className={customActiveClassName}>Massages</NavLink>
            </Item>
            <Item>
                <NavLink to="/users" className={customActiveClassName}>Users</NavLink>
            </Item>
            <Item>
                <NavLink to="/news" className={customActiveClassName}>News</NavLink>
            </Item>

            <Item>
                <NavLink to="/music" className={customActiveClassName}>Music</NavLink>
            </Item>
            <Item>
                <NavLink to="/settings" className={customActiveClassName}>Settings</NavLink>
            </Item>


        </Stack>

    );
};


export default Navbar;