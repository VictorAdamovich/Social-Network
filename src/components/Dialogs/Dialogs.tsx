import React, {useRef} from 'react';
import s from './dialog.module.css'
import {DialogItem} from "./DialogsItem/DialogItem";
import {Message} from "./Message/Message";
import {Send} from "@mui/icons-material";
import {Button} from "@mui/material";
import {
    addNewMessageAC,
    DialogPageType,
    DialogsType,
    MessagesType,
    updateNewMessageAC
} from '../../redux/dialogs-reducer';
import {ActionsType} from '../../redux/redux-store';

type DialogsPropsType={
    state: DialogPageType
    dispatch:(action: ActionsType) => void
}

const Dialogs = (props: DialogsPropsType) => {
    debugger
    let dialogsElements = props.state.dialogs.map((d: DialogsType) => <DialogItem id={d.id} name={d.name}
                                                                          avatar={d.avatar}/>)
    let massagesElements = props.state.messages.map((m: MessagesType) => <Message id={m.id} message={m.message}/>)

    let newMessageEl = useRef<HTMLTextAreaElement>(null)

    const addMessage = () => props.dispatch(addNewMessageAC())
    const onChangeHandler = () => newMessageEl.current !== null && props.dispatch(updateNewMessageAC(newMessageEl.current.value))

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {massagesElements}
                <div>
                    <textarea ref={newMessageEl} onChange={onChangeHandler}
                              value={props.state.newMessageText}></textarea>
                    <Button onClick={addMessage} variant="contained" endIcon={<Send/>}>
                        Send
                    </Button>
                </div>
            </div>

        </div>
    );
};

export default Dialogs;