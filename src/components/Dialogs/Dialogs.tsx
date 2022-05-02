import React, {useRef} from 'react';
import s from './dialog.module.css'
import {DialogItem, DialogItemType} from "./DialogsItem/DialogItem";
import {Message, MessageType} from "./Message/Message";


const Dialogs = (props: any) => {
    let dialogsElements = props.state.dialogs.map((d: DialogItemType) => <DialogItem id={d.id} name={d.name} avatar={d.avatar}/>)
    debugger
    let massagesElements = props.state.messages.map((m: MessageType) => <Message message={m.message}/>)

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