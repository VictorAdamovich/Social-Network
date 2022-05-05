import React, {useRef} from 'react';
import s from './dialog.module.css'
import {DialogItem} from "./DialogsItem/DialogItem";
import {Message} from "./Message/Message";

type DialogsPropsType = {
    state: DialogsStateType
}

export type DialogsStateType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
}

type DialogsType = {
    id: number
    name: string
    avatar: string
}

type MessagesType = {
    id: number
    message: string
}

const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.state.dialogs.map((d: DialogsType) => <DialogItem id={d.id} name={d.name}
                                                                                  avatar={d.avatar}/>)
    let massagesElements = props.state.messages.map((m: MessagesType) => <Message id={m.id} message={m.message}/>)

    let newMessageEl = useRef<HTMLTextAreaElement>(null)

    const addMessage = () => {
        if (newMessageEl.current !== null) {
            alert(newMessageEl.current.value)
        }
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {massagesElements}
                <textarea ref={newMessageEl}></textarea>
                <button onClick={addMessage}>Send</button>
            </div>

        </div>
    );
};

export default Dialogs;