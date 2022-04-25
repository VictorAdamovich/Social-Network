import s from "../dialog.module.css";
import React from "react";

export const Message = (props:any) => {
    return <div className={s.message}>{props.message}</div>
}