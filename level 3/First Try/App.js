// import {useState, useEffect} from "react";
import React from "react"
import '../src/style.css'
import Meme from "./meme"
import Form from "../src/form"
// import EditForm from "./form";\



export default function App (props) {

//     const[getAllMemes, setGetAllMemes] = useState([])

//     const[changeMeme, setChangeMeme] = useState({
//         image:"",
//         topText:"",
//         bottomText:"",
//         id:"",
//         edit:false
//     })
    
//     const[memeList, setMemeList] = useState([])

//     useEffect(() => {
//         fetch("https://api.imgflip.com/get_memes")
//         .then(res => res.json())
//         .then(data => setGetAllMemes(data.data.memes))

//     },[changeMeme])

//     console.log(getAllMemes)
    
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
    // function textChange (event) {
    //     const {name,value} = event.target
    //     setChangeMeme(prevText => {
    //         return {
    //             ...prevText,
    //             [name]:value
    //         }
    //     })
    // }
    
    // function submit (event){
    //     event.preventDefault()
    //     const list = {...changeMeme}
    //     setMemeList(prevList =>(
    //         [...prevList,list]
    //     ))
        
    // }
    // DOCS: Created a function to delete the meme off the page.
    // function deleteMeme (id){
    //     setMemeList(memeList.filter((m) => m.id !== id))
    // }

    //  //DOCS: Created a function to edit a created meme. 
    //  const editMeme = (id,updateItem) => {
    //     setMemeList(prevMemeList => {
    //         return prevMemeList.map((item, index) => {
    //             if(index === id) {
    //                 return updateItem
    //             }
    //             else {
    //                 return item
    //             }
    //         })
    //     })
    // }
    
    // const memsArray = memeList.map(meme =>{
    //     return (
    //         <div className="list">
    //             <EditForm/>
    //                  <div key={changeMeme.id}>
    //                     <img className="list-image" alt="meme" src={meme.image} 
    //                      style={{ width: "400px", height: "400px",position:"relative" }} ></img>
    
    //                      <h2 className="meme--list top" style={{position:"absolute",top: "-50px;"}}>
    //                         {meme.topText}</h2>
    
    //                     <h2 className="meme--list bottom" style={{position:"absolute"}}>
    //                         {meme.bottomText}</h2>
    //                     <button onClick={()=> deleteMeme(meme.id)}style={{color:"red", marginLeft: "10px",cursor:"pointer"}}>X</button>
    //                     <button onClick={() => editMeme(meme.id)}>Edit</button>
    //                     {/* <button onClick={<EditForm/>}> Edit</button> */}
                        
    //                 </div>
                    
    //         </div>
            

    //     )
    
    // })
     
    
    return (
        <div>
            <Form />
            <Meme />
        {/* <div className="input-buttons">
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
                    onClick={randomUrl}>
                    Refresh Meme Image
                    </button>
                    
                    <button type="submit" >
                        Create Meme
                    </button>
            </form> */}
             {/* </div> */}
            <div className="container">
                    <img className="meme-image" 
                    alt="meme"
                     src={props.changeMeme.image} 
                    style={{ width: "400px", height: "400px" }}
                    />
            
                    <h2 className="meme--text top">{props.changeMeme.topText}</h2>
                    <h2 className="meme--text bottom">{props.changeMeme.bottomText}</h2>
                   <br></br>
                   <br></br>
                   <div className="list">
                    {/* {memsArray} */}
                    </div>
        </div>
</div>
               
    )
}





export default function EditForm () {
    const [editForm, setEditForm] = useState(false);

    const [editPost, setEditPost] = useState({
        topText: props.topText,
        bottomText: props.bottomText
    })

    const toggleShowForm = () => { 
        setEditForm(prev=>!prev)
    }

    const change = (e) => { 
        const {name, value} = e.target
        setEditPost(prevEditPost=>{
            return ({
                ...prevEditPost,
                [name]:value
            })
        })
    }
    const handleSubmit = (e) => { 
        e.preventDefault()
        props.editMeme(props.id, editPost)
    }
    return (
        <div>
            {editForm ?
            <form onSubmit={handleSubmit}>
                <input
                placeholder="Edit Top Text"
                name="editTopText"
                value={editPost.editTopText}
                onChange={change}
                />
                <input 
                placeholder="Edit Bottom Text"
                name="editBottomText"
                value={editPost.editBottomText}
                onChange={change}
                />
                <button>Submit Edit</button>
            </form>
            :
            <>
            <h2>{props.topText}</h2>
                <p>{props.bottomText}</p>
            </>

            
            }
                <button onClick={toggleShowForm}>{editForm ? "Close" : "Edit"}</button>
        </div>
    );

}
