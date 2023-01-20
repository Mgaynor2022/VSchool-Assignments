import React,{useContext} from "react"
import { UglyThings } from "./uglyThingsAPI"
import Edit from "./edit"

export default function Main(props) {
    
    const {handleDelete, uglyThingsArray} = useContext(UglyThings)
    
    const displayUglyThings = uglyThingsArray.map(item => {
        console.log(item.imgUrl, "testing url")
        return (
            <main >
                <div>
                    <h2 name="title">{item.title}</h2>
                    <p name="description">{item.description}</p>
                    <img name="img" src={item.imgUrl} alt="" style={{height:200 ,width:200}}></img>
                    <button onClick={() => handleDelete(item._id)}>Delete</button>
                    <Edit key={item._id} {...item}/>    
                </div>
            </main>
            )
            
        })
        return (
            <div>
                {displayUglyThings}
            </div>
        )
  
     }

    
    