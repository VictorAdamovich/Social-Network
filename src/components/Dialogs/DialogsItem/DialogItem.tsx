import s from "../dialog.module.css";
import {NavLink} from "react-router-dom";
import React from "react";


export const DialogItem = (props: any) => {
    let path = '/massages/' + props.id;
    return (
        <div  className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}