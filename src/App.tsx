import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Route, Routes} from 'react-router-dom';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import {DialogContainer} from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import Grid from '@mui/material/Grid';


export const App = () => {
    return (
        <>
            <Grid container>
                <Grid item xs={1}>
                    <Navbar/>
                </Grid>

                <Grid item xs={11}>
                    <Grid item xs={12}>
                        <Header/>
                    </Grid>

                    <Grid item xs={12}>
                        <Routes>
                            <Route path="/message/*"
                                   element={<DialogContainer/>}/>
                            <Route path="/*"
                                   element={<Profile/>}/>

                            <Route path="/users" element={<UsersContainer/>}/>


                            <Route path="/news/" element={<News/>}/>
                            <Route path="/music/" element={<Music/>}/>
                            <Route path="/settings/" element={<Settings/>}/>
                        </Routes>
                    </Grid>

                </Grid>


            </Grid>

        </>
    );
};