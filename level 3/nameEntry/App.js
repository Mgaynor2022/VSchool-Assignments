import React from "react"



export default function App (){
    const [nameEntry, setNameEntry] = React.useState({
        fullName:"",
        names:[]
})

    function handleChange (event){
            const {name,value} = event.target
            setNameEntry(prevEntry => {
                return{
                    ...prevEntry,
                    [name]:value
                }   
        })
        
    }

    function handleSubmit (event) {
        event.preventDefault() 
        setNameEntry(prevEntry => {
            return {
                ...prevEntry,
                names:[...prevEntry.names, {
                    fullName: prevEntry.fullName
                }]
            }
        })
        
        
    }
    const nameList = nameEntry.names.map(item =>{
        console.log(item, "testing")
        return (
            <li>{item.fullName}</li>
        )
    })
    
    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>
                    {nameEntry.fullName}
                </h1>

                <ol>
                    {nameList}
                </ol>

            <input
                placeholder="Name"
                name="fullName"
                onChange={handleChange}
                value= {nameEntry.fullName}
            />
            <button className="submit">
                submit
            </button>
            </form>
        </div>
    )
}
