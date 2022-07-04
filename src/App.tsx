import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Route, Routes} from 'react-router-dom';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import {DialogContainer} from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import Grid from '@mui/material/Grid';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';


export const App = () => {
    return (
        <>
            <Grid container>
                <Grid item xs={2}>
                    <Navbar/>
                </Grid>

                <Grid item xs={10}>
                    <Grid item xs={12}>
                        <HeaderContainer/>
                    </Grid>

                    <Grid item xs={12}>
                        <Routes>
                            <Route path="/message/*" element={<DialogContainer/>}/>
                            <Route path="/profile/" element={<ProfileContainer/>}/>
                            <Route path="/profile/:userId" element={<ProfileContainer/>}/>
                            <Route path="/users" element={<UsersContainer/>}/>
                            <Route path="/news/" element={<News/>}/>
                            <Route path="/music/" element={<Music/>}/>
                            <Route path="/settings/" element={<Settings/>}/>
                            <Route path="/login" element={<Login/>}/>
                        </Routes>
                    </Grid>

                </Grid>
            </Grid>

        </>
    );
};