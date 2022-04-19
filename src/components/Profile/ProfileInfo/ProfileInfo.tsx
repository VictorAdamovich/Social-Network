import c from "./ProfileInfo.module.css";
import React from "react";

export const ProfileInfo = () => {
    return (
        <div>
            <div className={c.content}>
                <img
                    src="https://media.cntraveler.com/photos/5eb18e42fc043ed5d9779733/16:9/w_2580,c_limit/BlackForest-Germany-GettyImages-147180370.jpg"
                    alt=""/>
            </div>
            <div className={c.item}>
                ava+dicription
            </div>
        </div>
    )
}