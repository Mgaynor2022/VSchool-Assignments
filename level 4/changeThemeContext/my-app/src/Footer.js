import React, {useContext} from "react"
import { ThemeContext } from "./ThemeContext"

export default function Footer(){

    const {colorTheme} = useContext(ThemeContext)

    return(
        <div className = {`${colorTheme}-theme`}>
            <h2>I Could Of Been More Creative With The Footer</h2>
        </div>
    )
}