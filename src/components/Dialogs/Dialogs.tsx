import React from 'react';
import s from './dialog.module.css'
import {NavLink} from "react-router-dom";

type DialogItemType = {
    id: number
    name: string
}

const DialogItem = (props: DialogItemType) => {
    let path = '/massages/' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


type massageType = {
    massage: string
}
const Massage = (props: massageType) => {
    return <div className={s.massage}>{props.massage}</div>
}


const Dialogs = () => {
    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItem}>
                <DialogItem name={'Dimych'} id={1}/>
                <DialogItem name={'Andrei'} id={2}/>
                <DialogItem name={'Sveta'} id={3}/>
                <DialogItem name={'Victor'} id={4}/>
                <DialogItem name={'Valera'} id={5}/>
            </div>

            <div className={s.messages}>
                <Massage massage={'Hi'}/>
                <Massage massage={'Howe are you?'}/>
                <Massage massage={'you'}/>
            </div>

        </div>
    );
};

export default Dialogs;