import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Route, Routes} from 'react-router-dom';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import {Card, Grid} from '@mui/material';
import {DialogContainer} from './components/Dialogs/DialogsContainer';


export const App = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={2}>
                <Card variant="outlined">
                    <Navbar/>
                </Card>
            </Grid>
            <Grid item xs={10}>
                <Grid item xs={12}>
                    <Header/>
                </Grid>
                <Grid item xs={10}>
                    <Routes>
                        <Route path="/message/*"
                               element={<DialogContainer />}/>
                        <Route path="/profile/*"
                               element={<Profile/>}/>
                        <Route path="/news/" element={<News/>}/>
                        <Route path="/music/" element={<Music/>}/>
                        <Route path="/settings/" element={<Settings/>}/>
                    </Routes>
                </Grid>
            </Grid>
        </Grid>
    );
};