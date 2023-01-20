import React, {useState} from "react";

export default function EditForm (props) {

    const [editForm, setEditForm] = useState(false);

    const [editPost, setEditPost] = useState({
        topText: "",
        bottomText: "",
        image: props.image
    })

    const toggleShowForm = () => { 
        setEditForm(prev=>!prev)
    }

    function changeText (event) {
        const {name,value} = event.target
        setEditPost(prevPost => {
            return {
                ...prevPost,
                [name]:value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form was Submitted")
        props.editMeme(props.id, editPost)
    }
    return (
        <div className="memeList-container">
            
            {editForm ?
            
            <form 
                className="meme-list"
                onSubmit={handleSubmit}> 
                <input
                    type= "text"
                    placeholder="Edit Top Text"
                    name="topText"
                    value={editPost.topText}
                    onChange={changeText}
                />
                <input 
                    type= "text"
                    placeholder="Edit Bottom Text"
                    name="bottomText"
                    value={editPost.bottomText}
                    onChange={changeText}
                />
                <button>Submit Edit</button>

                <div className="edit-text">
                    <h2 className="edit-input top">{editPost.topText}</h2>
                    <h2 className= "edit-input bottom">{editPost.bottomText}</h2>
                </div>

            </form>
            :
            <>
            {/* <h2>{props.topText}</h2>
                <p>{props.bottomText}</p> */}
            </>
            }
                <button onClick={toggleShowForm}>{editForm ? "Close" : "Edit"}</button>
        </div>
    );

}