import React from 'react';
import s from './dialog.module.css'
import {DialogItem} from "./DialogsItem/DialogItem";
import {Massage} from "./Massage/Massage";


const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrei'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Victor'},
        {id: 5, name: 'Valera '},
    ]

    let massagesData = [
        {id: 1, massage: 'Hi'},
        {id: 2, massage: 'Howe are you?'},
        {id: 3, massage: 'Yo'},
        {id: 4, massage: 'Yo'},
        {id: 5, massage: 'Yo '},]

    let dialogsElements = dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)

    let massagesElements = massagesData.map(m => <Massage massage={m.massage}/>)

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