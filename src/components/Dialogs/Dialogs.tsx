import React from 'react';
import s from './dialog.module.css';
import {DialogItem} from './DialogsItem/DialogItem';
import {Message} from './Message/Message';
import {DialogPageType, DialogsType, MessagesType} from '../../redux/dialogs-reducer';
import {AddTextForm} from './Message/AddMessageForm';

type DialogsPropsType = {
    isAuth: boolean
    state: DialogPageType
    addMessage: (message: string) => void
}

const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.state.dialogs.map((d: DialogsType) => <DialogItem
        key={d.id} id={d.id} name={d.name}
        avatar={d.avatar}/>);
    let massagesElements = props.state.messages.map((m: MessagesType) => <Message
        key={m.id} id={m.id} message={m.message}/>);


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {massagesElements}
                <div>
                    <AddTextForm/>
                </div>
            </div>
        </div>
    );
};


export default Dialogs;