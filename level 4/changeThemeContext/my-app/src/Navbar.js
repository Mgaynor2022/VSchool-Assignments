import React, {useContext} from "react"
import { ThemeContext } from "./ThemeContext"

export default function Navbar(props){

    const {colorTheme,toggleTheme} = useContext(ThemeContext)

    return (
        <div className="navbar">
            <h3>Home</h3>
            <h3>About Me</h3>
            <h3>Contact</h3>
             <button onClick = {toggleTheme}>Change Theme </button>
        </div>
    )
    
}
