import React from "react"

export default function DiceBox(props) {
    return(
        <div className="box">
            <div>{props.number}</div>
        </div>
    )
}