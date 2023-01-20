import React from "react"


export default function Location (props) {
    return (
        <div className="location">
            <div>
                <img className="picture" src={props.imageUrl}></img>
            </div>
            <span className="places">
            <h5>{props.location}</h5>
            <span>{props.googleMapsUrl}</span>
            <h1>{props.title}</h1>
            <span>{props.startDate} - </span>
            <span>{props.endDate}</span>
            <p>{props.description}</p>
            </span>
            
        </div>
    )}