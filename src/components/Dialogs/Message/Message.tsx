import s from "../dialog.module.css";
import React from "react";
import c from "./Message.module.css";


export type MessageType={
    id:number
    message:string
}


export const Message = (props:MessageType) => {
    return <div key={props.id} className={s.message}>{props.message}</div>
}