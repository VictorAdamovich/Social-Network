import React from 'react';
import './App.css';
import Dialogs, {DialogsStateType} from './components/Dialogs/Dialogs';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import {store} from "./redux/state";




export const App = (props: any) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar state={props.state.dialogsPage.dialogs}/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/message/*" element={<Dialogs state={props.state.dialogsPage}/>}/>
                        <Route path="/profile/*"
                               element={<Profile profilePage={props.state.profilePage} dispatch={props.dispatch}
                               />
                               }/>
                        <Route path="/news/" element={<News/>}/>
                        <Route path="/music/" element={<Music/>}/>
                        <Route path="/settings/" element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}
