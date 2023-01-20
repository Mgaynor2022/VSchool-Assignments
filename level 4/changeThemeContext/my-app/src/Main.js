import React, {useContext} from "react"
import { ThemeContext } from "./ThemeContext"

export default function Main(){

    const {colorTheme} = useContext(ThemeContext)

    return(
        <div className = {`${colorTheme}-theme`}>
            <h1>{`The Webpage Currently Is In ${colorTheme} Mode`}</h1>
        </div>
    )
}