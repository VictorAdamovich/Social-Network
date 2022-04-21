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

//hi

function App(props: any) {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/massage/*" element= {<Dialogs dialogsData = {props.dialogsData} messagesData = {props.messagesData} />}/>
                        <Route path="/profile/*" element={<Profile postData={props.postData}/>}/>
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
