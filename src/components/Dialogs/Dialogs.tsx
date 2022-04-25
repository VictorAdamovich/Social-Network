import React from 'react';
import s from './dialog.module.css'
import {DialogItem} from "./DialogsItem/DialogItem";
import {Massage} from "./Massage/Massage";




const Dialogs = (props: any) => {
    debugger;

    let dialogsElements = props.dialogsData.map((d:any) => <DialogItem  name={d.name} id={d.id}/>)

    let massagesElements = props.messagesData.map((m:any) => <Massage massage={m.massage}/>)

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