import React, {useContext, useEffect} from "react"
import Main from "./main"
import { UglyThings } from "./uglyThingsAPI"

export default function ThingsList(props){


    const {handleDelete, uglyThingsArray,  handleEdit, handleSubmit,getList} = useContext(UglyThings)

    const displayUglyThings = uglyThingsArray.map(item => {
        <div>
            
        <Main 
        item={item}
        key={item._id} 
        handleDelete={handleDelete}
        />
        </div>
        
    })
    

    return (
        <div>
            {displayUglyThings}
        </div>
        
        
    )

}