import {applyMiddleware,combineReducers, legacy_createStore as createStore, Store} from 'redux';
import {ProfilePageACType, profileReducer} from './profile-reducer';
import {DialogsPageACType, dialogsReducer} from './dialogs-reducer';
import {UsersACType, usersReducer} from './users-reducer';
import {AuthACType, authReducer} from './auth-reducer';
import thunkMiddleware from 'redux-thunk'

export type ActionsType = DialogsPageACType | ProfilePageACType | UsersACType | AuthACType

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer
});

export type RootReduxType = ReturnType<typeof reducers>

export let store: Store<RootReduxType, ActionsType> = createStore(reducers,applyMiddleware(thunkMiddleware));

// @ts-ignore
window.store = store

