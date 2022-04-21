import s from "../dialog.module.css";
import React from "react";


export const Massage = (props:any) => {
    return <div className={s.massage}>{props.massage}</div>
}