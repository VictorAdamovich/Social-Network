import React, {useRef} from 'react';
import s from './dialog.module.css'
import {DialogItem} from "./DialogsItem/DialogItem";
import {Message} from "./Message/Message";
import {addNewMessageAC, updateNewMessageAC} from "../../redux/state";

const Dialogs = (props: any) => {
    let dialogsElements = props.state.dialogs.map((d: any) => <DialogItem id={d.id} name={d.name}
                                                                                  avatar={d.avatar}/>)
    let massagesElements = props.state.messages.map((m: any) => <Message id={m.id} message={m.message}/>)

    let newMessageEl = useRef<HTMLTextAreaElement>(null)

    const addMessage = () => props.dispatch(addNewMessageAC())
    const onChangeHandler = () =>newMessageEl.current !== null && props.dispatch(updateNewMessageAC(newMessageEl.current.value))

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {massagesElements}

                <textarea ref={newMessageEl} onChange={onChangeHandler} value={props.state.newMessageText}></textarea>
                <button onClick={addMessage}>Send</button>
            </div>

        </div>
    );
};

export default Dialogs;