import React, {useState,useEffect} from "react";
import Memes from "./memes";
import Forms from "./form";
import '../src/style.css'
import EditForm from "./edit";

export default function Apps () {

    const [memesData, setMemesData] = useState([])

    const [memeList, setMemeList] = useState([])

    const[changeMeme, setChangeMeme] = useState({
        image:"https://i.imgflip.com/2fm6x.jpg",
        topText:"",
        bottomText:"",
        id:""
    })
    

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res =>res.json())
        .then(data => setMemesData(data.data.memes))
    },[changeMeme])

    function randomUrl (){
        const randomNum = Math.floor(Math.random() * memesData.length )
        const url = memesData[randomNum].url
        const id = memesData.id
            setChangeMeme(prevMeme =>{
                return{
                    ...prevMeme,
                    image: url,
                    id:id
                }
            })
    }
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
    
     function deleteMeme (id){
        setMemeList(memeList.filter((m) => m.id !== id))
    }

     //DOCS: Created a function to edit a created meme.
     // All we are doing is updating the state to match the id that of the edit text input. 
     const editMeme = (id,updateItem) => {
        setMemeList(prevMemeList => {
            return prevMemeList.map((item, index) => {
                console.log(index,id)
                if(index === id) {
                    return updateItem
                }
                else {
                    return item
                }
            })
        })
    }
    const list = memeList.map((post,index) => {
        return <EditForm
        key={index}
        image={post.image}
        editMeme={editMeme}
        topText={post.topText}
        bottomText={post.bottomText}
        id={index}
        submit={submit}
        changeMeme={changeMeme}
        />})

    return (
        <div>
            <Forms
            randomUrl={randomUrl}
            textChange={textChange}
            submit={submit}
            memesData={memesData}
            changeMeme={changeMeme}
             memeList={memeList}
            />

            <Memes
             memesData={memesData}
             changeMeme={changeMeme}
             memeList={memeList}
             editMeme={editMeme}
             deleteMeme={deleteMeme}
             list={list}
            
             />
             {/* {list} */}
        </div>
    )
}