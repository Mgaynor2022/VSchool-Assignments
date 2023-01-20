import React from "react";



export default function Pets (props) {
    return (
        <ol>
            <li>
                <h1>{props.pet.name}</h1>
                <h2>{props.pet.breed}</h2>
            </li>
        </ol>
    )
}