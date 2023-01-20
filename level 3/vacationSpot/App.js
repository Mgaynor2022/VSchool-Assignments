import React from "react";
import Card from "../src/card";
import data from "../src/data";
import Header from "../src/header";
import '../src/style.css'

export default function App () {
    const pageElements = data.map(item => {
        return <Card 
                    place = {item.place}
                    price = {item.price}
                    timeToGo = {item.timeToGo}
        />
                        
    })
    return (
        <div>
            <Header />
            {pageElements}
        </div>
    )
}