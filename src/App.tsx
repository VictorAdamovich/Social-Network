import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import {addPost} from "./redux/state";


function App(props: any) {
    let profileState = props.state.profilePage.posts
    let dialogsState = props.state.dialogsPage

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar state={props.state.dialogsPage.dialogs}/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/message/*" element={<Dialogs state={dialogsState}/>}/>
                        <Route path="/profile/*" element={<Profile state={profileState} addPost={addPost}/>}/>
                        <Route path="/news/" element={<News/>}/>
                        <Route path="/music/" element={<Music/>}/>
                        <Route path="/settings/" element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
