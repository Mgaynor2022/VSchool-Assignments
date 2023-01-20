import {React,useState,useEffect} from "react"


export default function Meme(props) {
    const[getAllMemes, setGetAllMemes] = useState([])
    
    const[changeMeme, setChangeMeme] = useState({
        image:"",
        topText:"",
        bottomText:"",
        id:"",
        edit:false
    })
    
    //const[memeList, setMemeList] = useState([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setGetAllMemes(data.data.memes))

    },[changeMeme])

    // function submit (event){
    //     event.preventDefault()
    //     const list = {...changeMeme}
    //     setMemeList(prevList =>(
    //         [...prevList,list]
    //     ))
        
    // }
    function randomUrl (){
        const randomNum = Math.floor(Math.random() * getAllMemes.length )
        const url = getAllMemes[randomNum].url
        const id = getAllMemes.id
            setChangeMeme(prevMeme =>{
                return{
                    ...prevMeme,
                    image: url,
                    id:id
                }
            })
    }

    console.log(getAllMemes)

    function deleteMeme (id){
        setMemeList(memeList.filter((m) => m.id !== id))
    }

     //DOCS: Created a function to edit a created meme. 
     const editMeme = (id,updateItem) => {
        setMemeList(prevMemeList => {
            return prevMemeList.map((item, index) => {
                if(index === id) {
                    return updateItem
                }
                else {
                    return item
                }
            })
        })
    }
    
    const memsArray = memeList.map(meme =>{
        return (
            <div className="list">
                     <div key={changeMeme.id}>
                        <img className="list-image" alt="meme" src={meme.image} 
                         style={{ width: "400px", height: "400px",position:"relative" }} ></img>
    
                         <h2 className="meme--list top" style={{position:"absolute",top: "-50px;"}}>
                            {meme.topText}</h2>
    
                        <h2 className="meme--list bottom" style={{position:"absolute"}}>
                            {meme.bottomText}</h2>
                        <button onClick={()=> deleteMeme(meme.id)}style={{color:"red", marginLeft: "10px",cursor:"pointer"}}>X</button>
                        <button onClick={() => editMeme(meme.id)}>Edit</button>
                        {/* <button onClick={<EditForm/>}> Edit</button> */}
                        
                    </div>  
            </div>
        )
    })
    return (
        <div>

        </div>
    )
}