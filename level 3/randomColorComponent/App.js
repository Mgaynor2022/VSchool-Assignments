import { useState, useEffect} from "react";
import React from "react"
import '../src/style.css'

export default function App () {
    const [randomColor,setRandomColor] = useState("")
    const [color,setColor] = useState(0)


    useEffect(function(){
        fetch(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
        .then(res => res.json())
        //.then(data => console.log(data))
        .then(data => setRandomColor(data.colors[0].hex))

    },[color])
       
    return (
        <div className="container">
            <div className="color" style={{backgroundColor:`#${randomColor}`}}>
                <button onClick={() => setColor(prevColor => prevColor + 1)}> Change Color</button>

            </div>
        </div>
    )
    
}

