import React from 'react';
import {
    addNewMessageAC,
    updateNewMessageAC
} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

type DialogsPropsType = {
   store:any
}

export const DialogsContainer = (props: DialogsPropsType) => {
    let state= props.store.getState().dialogsPage

    const addMessage = () => props.store.dispatch(addNewMessageAC());
    const onChangeHandler = (text:string) => props.store.dispatch(updateNewMessageAC(text));

    return <Dialogs
        state={state}
        onAddMessage={addMessage}
        onChangeHandler={onChangeHandler}
    />
};

