import React from "react"
import Navbar from "./Navbar"
import Main from "./Main"
import Footer from "./Footer"
import { ThemeContextProvider } from "./ThemeContext"
import '../src/style.css'

export default function App(props){
    return(
        <>
            < ThemeContextProvider>
                <Navbar />
                <Main />
                <Footer />
            </ThemeContextProvider>
        </>
    )
    
}