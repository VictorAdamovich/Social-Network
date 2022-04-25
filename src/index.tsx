import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postData = [
    {id: 1, massage: 'Hi,how are you?', likeCount: 4},
    {id: 2, massage: 'Its my first post?', likeCount: 11}
]

let dialogsData = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrei'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Victor'},
    {id: 5, name: 'Valera '}
]

let massagesData = [
    {id: 1, massage: 'Hi'},
    {id: 2, massage: 'Howe are you?'},
    {id: 3, massage: 'Yo'},
    {id: 4, massage: 'Yo'},
    {id: 5, massage: 'Yo '}
]

ReactDOM.render(

    <React.StrictMode>
        <App
            postData={postData}
            dialogsData={dialogsData}
            massagesData={massagesData}
        />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
