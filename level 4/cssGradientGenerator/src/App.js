import React, {useState} from "react"
import GGT from "./GGT"


export default function App() {

    /// This is to display the current gradient.
    const[formData, setFormData] = useState(
        "linear-gradient(50deg, #FFFF00 , #000000)"
        )

    // This is to save the the users input gradient data.
    const[gradient,setGradient] = useState({
        direction:"to right",
        color1:"#FFFF00",
        color2:"#000000"

    })

    // Making template for cross browser CSS Code
    const[generatedCss,SetGeneratesCss] = useState(
        `background: linear-gradient(to right, #FFFF00 , #000000)
        -moz-background: linear-gradient(to right, #FFFF00 , #000000)
        -webkit: linear-gradient(to right, #FFFF00 , #000000)`
    )

    function handleChange(event) {
        const{name,value} = event.target
        setGradient(prevGradient => {
            return {
                ...prevGradient,
                [name]:value
            }
        })
    }
    

    function handleSubmit(event) {
        event.preventDefault()
        SetGeneratesCss(
            `background: linear-gradient(${gradient.direction}, ${gradient.color1} , ${gradient.color2}); 
            -moz-background: linear-gradient(${gradient.direction}, ${gradient.color1} , ${gradient.color2}); 
            -webkit: linear-gradient(${gradient.direction}, ${gradient.color1} , ${gradient.color2})`
        )}
        
    
    return (
        <div>
            <GGT>
                <form onSubmit={handleSubmit}>
                    <input name="color1" value={gradient.color1} type="text" placeholder="Color 1" onChange={handleChange}></input>
                    <input name="color2" value={gradient.color2} type="text" placeholder="Color 2" onChange={handleChange}></input>
                    {/* <input name="angle" value={gradient.direction} type="number" placeholder="Place Angle Number" onChange={handleChange}></input> */}
                
                <select name="directions" value={gradient.direction} onChange={handleChange}>
                    <option value="">-- Choose --</option>
                    <option name="to right" value="to right">-- to right --</option>
                    <option name="to bottom right" value="to bottom right">-- to bottom right --</option>
                    <option name="to left" value="to left">-- to left --</option>
                    <option name="to bottom left" value="to bottom left">-- to bottom left --</option>
                </select>    
                    
                    <button>Generate CSS Gradient Code</button>
                </form>
            </GGT>

            <GGT>
                <div style={{
                    height:300,
                    width:300,
                    background:`linear-gradient(${gradient.direction}, ${gradient.color1}, ${gradient.color2})`
                    }}>

                </div>
            </GGT>

            <GGT>
                <form onSubmit={handleSubmit}>
                    <textarea style={{rows:"3",cols:"30"}} readOnly>
                        {generatedCss}
                    </textarea>
                </form>
            </GGT>

        </div>
        
        

       
    )
    
}