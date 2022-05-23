import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {RootReduxType, store} from './redux/redux-store';
import { Store } from 'redux';


let renderEntireTree = (rootStore: Store<RootReduxType>) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={rootStore.getState()} dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderEntireTree(store);
store.subscribe( () => renderEntireTree(store));