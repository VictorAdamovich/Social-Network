import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';
import {Header} from './components/Header/Header';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';


export const App = () => {
    return (
        <>
            <div>
                <Header/>
            </div>
            <div>
                <Routes>
                    <Route path="/message/*" element={<Dialogs/>}/>
                    <Route path="/profile/" element={<Profile/>}/>
                    <Route path="/profile/:userId" element={<Profile/>}/>
                    <Route path="/users" element={<UsersContainer/>}/>
                    <Route path="/news/" element={<News/>}/>
                    <Route path="/music/" element={<Music/>}/>
                    <Route path="/settings/" element={<Settings/>}/>
                    <Route path="/login" element={<Login/>}/>
                </Routes>
            </div>
        </>
    );
};