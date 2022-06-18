import s from '../dialog.module.css';
import {NavLink} from 'react-router-dom';
import React from 'react';
import c from './massage.module.css';

export type DialogItemType = {
    id: number
    name: string
    avatar: string
}

export const DialogItem = (props: DialogItemType) => {
    let path = '/massages/' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path} className={c.dialogUser}>
                <img className={c.dialog_avatar} src={props.avatar} alt={`ava+${props.id}`}/>
                {props.name}
            </NavLink>
        </div>
    );
};