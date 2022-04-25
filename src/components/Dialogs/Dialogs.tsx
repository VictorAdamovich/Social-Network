import React from 'react';
import s from './dialog.module.css'
import {DialogItem} from "./DialogsItem/DialogItem";
import {Message} from "./Message/Message";




const Dialogs = (props: any) => {
    let dialogsElements = props.state.dialogs.map((d:any) => <DialogItem  id={d.id} name={d.name} avatar={d.avatar} />)

    let massagesElements = props.state.messages.map((m:any) => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {massagesElements}
            </div>

        </div>
    );
};

export default Dialogs;