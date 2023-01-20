import React from "react"


export default function Forms(props) {

    const randomUrl = props.randomUrl

    const textChange = props.textChange
    
     return (
        <div className="form-div">
                <form className="form-container"
                     onSubmit={props.submit}
                    >
                   <input className="top-text"
                       name="topText"
                       type="text"
                       value={props.changeMeme.topText}
                       onChange={textChange}
                       placeholder="Top Text"
                       />
   
               <input className="bottom-text"
                       name="bottomText"
                       type="text"
                       value={props.changeMeme.bottomText}
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
                    </form>

                    <div className="meme-container">
                       <img className="meme-image" 
                        alt="meme"
                         src={props.changeMeme.image} 
                        style={{ width: "400px", height: "400px" }}
                        />
            
                    <h2 className="meme--text top">{props.changeMeme.topText}</h2>
                    <h2 className="meme--text bottom">{props.changeMeme.bottomText}</h2>
                       </div>
        </div>
               
   )
    }




    