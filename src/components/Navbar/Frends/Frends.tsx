import React from "react";
import {ShowFrendsAvatar} from "./ShowFrendsAvatar/ShowFrendsAvatar";

export const Frends = (props:any) => {
debugger
    let showFrends= props.state.map((f:any)=>{ <ShowFrendsAvatar id={f.id} avatar={f.avatar}/>  })

    return (
        <div>
            <h2>Frends</h2>
            <span>{showFrends}</span>
        </div>
    )

}


