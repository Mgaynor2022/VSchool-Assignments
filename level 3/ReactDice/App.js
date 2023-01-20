import React from "react"
import DiceBox from "./diceBox"


export default function App(){
    const [numbers, setNumbers] = React.useState([5,3,6,1,2])

    function newSet(){
        setNumbers([
            Math.floor(Math.random() * 6),
            Math.floor(Math.random() * 6),
            Math.floor(Math.random() * 6),
            Math.floor(Math.random() * 6),
            Math.floor(Math.random() * 6)
        ])
        }

    const displayNum = numbers.map(item =>{
        return (
            <DiceBox number={item} />

        )
    })
    return (
        <div className="container">
            {displayNum}
            <button onClick={newSet}>Generate New Set</button>
        </div>
    )

    }



    

        
    
