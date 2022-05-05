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
import {addPost, updateNewPostText} from "./redux/state";
import {MyPostStateType} from "./components/Profile/MyPosts/Posts/MyPosts";


type AppPropsType = {
    addPost: () => void
    state: AppStateType
}

export type AppStateType = {
    dialogsPage: DialogsStateType
    profilePage: MyPostStateType
}


function App(props: AppPropsType) {
    debugger;

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar state={props.state.dialogsPage.dialogs}/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/message/*" element={<Dialogs state={props.state.dialogsPage}/>}/>
                        <Route path="/profile/*"
                               element={<Profile profilePage={props.state.profilePage}
                                                 addPost={addPost}
                                                 updateNewPostText={updateNewPostText}
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

export default App;
