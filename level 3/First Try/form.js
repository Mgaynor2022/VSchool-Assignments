import {React, useState} from "react"


export default function Form(props) {
    
    const[memeList, setMemeList] = useState([])
    const[changeMeme, setChangeMeme] = useState({
        image:"",
        topText:"",
        bottomText:"",
        id:"",
        edit:false
        // image:props.image
    })
    function textChange (event) {
        const {name,value} = event.target
        setChangeMeme(prevText => {
            return {
                ...prevText,
                [name]:value
            }
        })
    }
    function submit (event){
        event.preventDefault()
        const list = {...changeMeme}
        setMemeList(prevList =>(
            [...prevList,list]
        ))
        
     }

    // function randomUrl (){
    //     const randomNum = Math.floor(Math.random() * getAllMemes.length )
    //     const url = getAllMemes[randomNum].url
    //     const id = getAllMemes.id
    //         setChangeMeme(prevMeme =>{
    //             return{
    //                 ...prevMeme,
    //                 image: url,
    //                 id:id
    //             }
    //         })
    // }
    return (
         <form onSubmit={submit}>
                    <input className="top-text"
                        name="topText"
                        type="text"
                        value={changeMeme.topText}
                        onChange={textChange}
                        placeholder="Top Text"
                        />
    
                <input className="bottom-text"
                        name="bottomText"
                        type="text"
                        value={changeMeme.bottomText}
                        onChange={textChange}
                        placeholder="Bottom Text"
                        />
    
                        <button className="new-meme"
                        type="button"
                        onClick={props.randomUrl}>
                        Refresh Meme Image
                        </button>
                        
                        <button type="submit" >
                            Create Meme
                        </button>
                </form>
    )
}