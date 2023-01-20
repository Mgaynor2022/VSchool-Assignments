import React from "react";

export default function Post (props) {
    return (
        <div className="container">
            <a href="url"><h1>{props.title}</h1></a>
            <a href="url"><h2>{props.subTitle}</h2></a>
            <h3>{props.author}</h3>
            <span> on {props.date}</span>
        </div>
    )
}