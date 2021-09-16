import React, {useState} from "react";


function Sets(props) {
    return (
        <div className= "sets">
            <p>Set # {props.sets}</p>
            <p>{props.reps} {props.exercise}</p>

        </div>
    )
}

export default Sets;