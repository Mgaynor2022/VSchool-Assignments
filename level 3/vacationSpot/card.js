import React from "react"

export default function Card (props) {
    return (
        <div className="card">
                <h1>{props.place}</h1>
                <h3>Price: {props.price}</h3>
                <h3>Season: {props.timeToGo}</h3>
        </div>
        
    )
}


