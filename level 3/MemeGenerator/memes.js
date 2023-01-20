import React, {useState} from "react"
import EditForm from "./edit"



export default function Memes(props) {

    const [toggle, setToggle] = useState(false)

    const [toggleId, setToggleId] = useState(null)

function handleClick (i) {
    setToggle(true)
    setToggleId(i)  
    console.log(i)
}
console.log(toggle,toggleId)
    const memeList = props.memeList
    const deleteMeme = props.deleteMeme
    // const editMeme = props.editMeme

    const memsArray= memeList.map((meme,i) =>{
             
        return (
            <div>
            <main className="meme-array"
                    key={props.changeMeme.id}>


            <div className="meme-list">
                   <img 
                       className="list-image" 
                       alt="meme" 
                       src={meme.image} 
                       style={{ width: "400px", 
                       height: "400px",
                    }} >
                   </img>
               
                  <h2 className="meme--text top" >{meme.topText}</h2>
                  <h2 className="meme--text bottom" >{meme.bottomText}</h2>
             </div>
                    <div className="meme-buttons">

                        <button className="delete"
                             onClick={()=> deleteMeme(meme.id)}
                             style={{color:"red",
                             marginLeft: "10px",
                             cursor:"pointer"}}>
                                 Delete             
                        </button>

                        {/* {toggle && i === toggleId && <EditForm  /> }  
                          <button onClick={() => handleClick(i)}> Edit</button> */}
                         {props.list}

                    </div>
              </main>
            </div>
        )
    })
    return (
        <div className="random-container">
            {memsArray}
        </div>
    )
}