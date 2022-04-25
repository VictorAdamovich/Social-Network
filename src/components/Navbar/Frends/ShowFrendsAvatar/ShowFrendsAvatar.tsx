import React from "react";

export const ShowFrendsAvatar = (props: any) => {
    return (
        <div>
            <img src={props.avatar} alt={`avatar+${props.id}`}/>
        </div>
    )
}