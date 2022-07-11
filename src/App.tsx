import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import {DialogContainer} from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Login from './components/Login/Login';
import {Header} from './components/Header/Header';


export const App = () => {
    return (
        <>
            <div>
                <Header/>
            </div>
            <div>
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
            </div>
        </>
    );
};