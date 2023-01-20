import React from "react";
import data from "../src/data"
import Pets from "./components/pets";

export default function Friend (props) {
    const pets = props.item.pets.map(pet => <Pets key={pet.name} pet={pet} />)
    
    return (
        <div className="friends">
            <h1>{props.item.name}</h1>
            <h3>{props.item.age}</h3>
            Pets Names: {pets}
            
        </div>
    )
    

}