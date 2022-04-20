import s from "../dialog.module.css";
import React from "react";

type massageType = {
    massage: string
}
export const Massage = (props: massageType) => {
    return <div className={s.massage}>{props.massage}</div>
}