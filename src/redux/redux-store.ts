import {combineReducers, legacy_createStore as createStore, Store} from "redux";
import {ProfilePageACType, profileReducer} from './profile-reducer';
import {DialogsPageACType, dialogsReducer} from './dialogs-reducer';
import {usersReducer} from './users-reducer';

export type ActionsType = DialogsPageACType | ProfilePageACType

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage:usersReducer
});

export type RootReduxType = ReturnType<typeof reducers>

export let store: Store<RootReduxType, ActionsType> = createStore(reducers);

