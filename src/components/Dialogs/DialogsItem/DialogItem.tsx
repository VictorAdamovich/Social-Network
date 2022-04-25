import s from "../dialog.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import c from './/massage.module.css'


export const DialogItem = (props: any) => {
    let path = '/massages/' + props.id;
    debugger;
    return (
        <div  className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>
                <img  className={c.dialog_avatar} src={props.avatar} alt={`ava+${props.id}`}/>
                {props.name}</NavLink>
        </div>
    )
}