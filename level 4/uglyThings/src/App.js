import React from "react"
import Form from "./Form"
import Main from "./main"
import ThingsList from "./ThingsList"
import { UglyThingsContext } from "./uglyThingsAPI"


export default function App(){
    return (
        <>
            <UglyThingsContext>
                <Form />
                < Main />
                <ThingsList/>
            </UglyThingsContext>
        </>
        
       
    )
}