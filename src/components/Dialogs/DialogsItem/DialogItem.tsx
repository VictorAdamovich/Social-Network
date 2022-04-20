import s from "../dialog.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type dialogItemType = {
    id: number
    name: string
}
export const DialogItem = (props: dialogItemType) => {
    let path = '/massages/' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}